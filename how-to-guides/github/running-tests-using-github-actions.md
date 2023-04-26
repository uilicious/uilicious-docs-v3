# Running tests using Github Actions

Using Github Actions, you can setup a CI/CD pipeline that automatically runs UI-licious tests, whenever there is new code pushed to your repository, or perhaps at a scheduled interval.

![Run tests when commits are pushed to target branches and get immediate feedback when something is broken.](/static/img/github-actions/github-actions-run-tests-pushed-commits-job-statuses.png)

This section will show you how to setup a workflow to run a suite of UI-licious tests on **push**.

To see a completed example, you can check out this [Github project](https://github.com/uilicious/github-tests) for reference. 

**First**, create the `.github/workflows` folder in your repository.

**Then**, create `run-uilicious-tests.yml` file in the `.github/workflows` folder.

**Copy and paste** the following to the `run-uilicious-tests.yml` file:
```yaml
name: Run UI-licious Tests
run-name: Run UI-licious Tests
on:
  # run uilicious tests when commits are pushed to target branches
  push:
    branches:
      - 'main'
jobs:
  # The "sync-to-cloud" job:
  # This sync all test files from the test directory in the repository to UI-licious Cloud
  sync-to-cloud:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout HEAD
        uses: actions/checkout@v3
        with:
          ref: ${{ github.head_ref }}
      - name: Install uilicious-cli
        run: npm install -g uilicious-cli
      - name: Upload UI-licious Project
        run: uilicious-cli upload ${{ vars.UILICIOUS_PROJECT_ID }} ${{ vars.UILICIOUS_TEST_DIR }} --key ${{ secrets.UILICIOUS_ACCESS_KEY }}
  # The "run-test" job:
  # This runs specified test files in parallel
  run-test:
    # Run 'sync-to-cloud' job is complete.
    needs: sync-to-cloud 
    strategy:
      matrix: 
        # List of test files to run
        test_file_path: [
          "test_file_1",
          "folder_a/test_file2" 
        ]
        # List of browsers to run the tests on
        browser: ['chrome']
        # List of resolutions to run the tests on
        resolution: [{width: 1280, height: 800}]
      # Number of Github Runners to run this job in parallel
      # - This should not be more than the number of UI-licious test runners that you have available
      max-parallel: 2 
    runs-on: ubuntu-latest
    steps:
      - run: echo '"${{ matrix.test_file_path }}" (${{ matrix.browser }} ${{ matrix.resolution.width }}x${{ matrix.resolution.height }})'
      - name: Install uilicious-cli
        run: npm install -g uilicious-cli
      - name: Run File
        run: uilicious-cli run ${{ vars.UILICIOUS_PROJECT_ID }} "${{ matrix.test_file_path }}" --browser ${{ matrix.browser }} --width ${{ matrix.resolution.width }} --height ${{ matrix.resolution.height }} --key ${{ secrets.UILICIOUS_ACCESS_KEY }}
```

This workflow will trigger when changes are pushed to the `main` branch. You can change the conditions to trigger workflow at lines 4 - 6. See Github's documentation on the [**push**](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#push) trigger.

This workflow runs two jobs:
1. `sync-to-cloud`: This job uploads all tests found in the `UILICIOUS_TEST_DIR` to the UI-licious Cloud. If your team only uses the Editor interface on UI-licious Cloud for writing tests, then this job is not neccessary, and you can remove this job entirely and `needs: sync-to-cloud` at line 22.
2. `run-test`: This job runs a suite of test based on the `matrix` configuration.

**Configuring** the tests you want to run under `matrix` in the `run-test` job:
  - `test_file_path`: The list of tests you want to run
  - `browser`: The browser(s) you want to run.
  - `resolution` The resolution(s) you want to run the test on. 

Github actions will create a job for each combination of **test_file_path** x **browser** x **resolution**, and run them in parallel. 

**Configure** the number of parallel runs by changing `max-parallel` under the `run-test` job. Note that this should not be more than the number of UI-licious test runners you have available in your UI-licious subscription.

**Configure** the following Github Actions **variables**:
- `UILICIOUS_PROJECT_ID` : This is the UI-licious project ID, which you can find in the "Project Settings" page.
- `UILICIOUS_TEST_DIR` : Which folder in the respository do save the UI-licious files to? E.g. "./tests". This is not needed the `sync-to-cloud` job is not necessary for your process.

![](/static/img/github-actions/github-actions-variables.png)

**Configure** the following Github Actions **secrets**:
- `UILICIOUS_ACCESS_KEY` : This is your UI-licious [access key](https://user.uilicious.com/accessKeys).

![](/static/img/github-actions/github-actions-secrets.png)

**Finally**, commit `.github/workflow/run-uilicious-tests.yml` to the your repository, and make a change on your target branch to trigger the workflow!

![](/static/img/github-actions/github-actions-run-tests-on-push.png)
