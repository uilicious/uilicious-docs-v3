# Github Integrations

## Commiting UI-licious projects to a Github repository

If your team using the editor on UI-licious Studio to edit the test files, and you wish to save the files to a Github repository, this section covers how to do so manually step-by-step using the `uilicious-cli`, and automatically using Github Actions.

### Manual commits

If you wish to commit your test project to a Github repository, you can use the command line tool to download project to your computer and then commit the test file to your Github repository.

**First**, install the `uilicious-cli`:
```bash
# install uilicious-cli globally
npm install -g uilicious-cli 
```

**Then**, download the test project to your machine (you will need your [access key](https://user.uilicious.com/accessKeys)):

```bash
# download test project to your computer
uilicious-cli download <project_name> <local_directory> --key <accesskey>

# Example: 
# uilicious-cli download "AcmeCorp Store" "./tests"
# This will donwload the "AcmeCorp Store" project to the "tests" folder at the current working directory
```

**Finally**, commit the changes to your git repository (assuming it has been initialised):
```bash 
# Stage all changes 
git add -all

# Commit staged changes
git commit -m '<commit_message>'
```

### Auto-commits using Github Actions

If you wish to save yourself the trouble of manually committing test files to your Github repository, you can use Github Actions to do so automatically on push or at a scheduled interval.

![](/static/img/github-actions/github-actions-sync-uilicious-project-workflow-auto-commit.png)

To see a completed example, you can check out this [Github project](https://github.com/uilicious/github-tests) for reference. 

**First**, create the `.github/workflows` folder in your repository.

**Then**, create `sync-uilicious-project.yml` file in the `.github/workflows` folder.

**Copy and paste** the following to the `sync-uilicious-project.yml` file:
```yaml
run-name: Sync UI-licious Tests
on:
  # sync uilicious projects on push
  push:
    branches:
      - 'main'
  # sync uilicious projects at regular intervals
  schedule:
    - cron: '0 */1 * * *' # every hour
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout HEAD
        uses: actions/checkout@v3
        with:
          ref: ${{ github.head_ref }}
      - name: Install uilicious-cli
        run: npm install -g uilicious-cli
      - name: Download UI-licious Project
        run: uilicious-cli download ${{ vars.UILICIOUS_PROJECT_ID }} ${{ vars.UILICIOUS_TEST_DIR }} --key ${{ secrets.UILICIOUS_ACCESS_KEY }}
      - name: Commit changed files to the repository
        uses: stefanzweifel/git-auto-commit-action@v4 # Refer to: https://github.com/marketplace/actions/git-auto-commit
        with:
          commit_message: "[Auto-commit] Sync UI-licious Tests"
```

This workflow will download the UI-licious project, check for changed files, and automatically make a commit. If you wish to chnage the commit message, you can change line 21.

This workflow will trigger when changes are pushed to the `main` branch, and at every hour. You can change when this conditions trigger by changing lines 2 - 8. See Github's documentation on the [**push**](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#push) and [**schedule**](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) triggers.

**Configure** the following Github Actions **variables**:
- `UILICIOUS_PROJECT_ID` : This is the UI-licious project ID, which you can find in the "Project Settings" page.
- `UILICIOUS_TEST_DIR` : Which folder in the respository do you want to save the UI-licious files to? E.g. "./tests"

![](/static/img/github-actions/github-actions-variables.png)

**Configure** the following Github Actions **secrets**:
- `UILICIOUS_ACCESS_KEY` : This is your UI-licious [access key](https://user.uilicious.com/accessKeys).

![](/static/img/github-actions/github-actions-secrets.png)

**Finally**, commit `.github/workflows/sync-uilicious-project.yml` to the target branch on your Github repository, and you should see the workflow running for the first time on the "Actions" tab.

![](/static/img/github-actions/github-actions-sync-uilicious-project-workflow-trigger.png)


## Running tests via Github Actions

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

This workflow will trigger when changes are pushed to the `main` branch. You can change when this conditions trigger by changing lines 4 - 6. See Github's documentation on the [**push**](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#push) trigger.

This workflow runs two jobs:
1. `sync-to-cloud`: This job uploads all tests found in the `UILICIOUS_TEST_DIR` to the UI-licious Cloud. If your team only uses the Editor interface on UI-licious Cloud for writing tests, then this job is not neccessary, and you can remove this job entirely and `needs: sync-to-cloud` at line 22.
2. `run-test`: This job runs a suite of test based on the `matrix` configuration.

Configuring the tests you want to run under `matrix` in the `run-test` job:
  - `test_file_path`: The list of tests you want to run
  - `browser`: The browser(s) you want to run.
  - `resolution` The resolution(s) you want to run the test on. 

Github actions will create a job for each combination of **test_file_path** x **browser** x **resolution**, and run them in parallel. 

Configure the number of parallel runs by changing `max-parallel` under the `run-test` job. Note that this should not be more than the number of UI-licious test runners you have available in your UI-licious subscription.

Configure the following Github Actions **variables**:
- `UILICIOUS_PROJECT_ID` : This is the UI-licious project ID, which you can find in the "Project Settings" page.
- `UILICIOUS_TEST_DIR` : Which folder in the respository do save the UI-licious files to? E.g. "./tests". This is not needed the `sync-to-cloud` job is not necessary for your process.

![](/static/img/github-actions/github-actions-variables.png)

Configure the following Github Actions **secrets**:
- `UILICIOUS_ACCESS_KEY` : This is your UI-licious [access key](https://user.uilicious.com/accessKeys).

![](/static/img/github-actions/github-actions-secrets.png)

Finally, commit `.github/workflow/run-uilicious-tests.yml` to the your repository, and make a change on your target branch to trigger the workflow!

![](/static/img/github-actions/github-actions-run-tests-on-push.png)
