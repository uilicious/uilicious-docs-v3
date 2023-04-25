# Handling downloaded files

UIlicious provides methods that allow you to list downloaded files, validate the existence and the size of a downloaded file, and upload the downloaded files.

{% hint style="warning" %}
Handling downloaded file is currently only supported for the current browsers: <br>
- Chrome <br>
- Firefox <br>
- Edge Chromium <br>
{% endhint %}

## Where do the files downloaded during the tests go?

During test execution, files downloaded by the browser will be temporarily saved to a **virtual** "Downloads" folder.

{% hint style="warning" %}
Note that there is no way to name the downloaded file. The file wll be saved using the name set by the application server where the file is downloaded from.
{% endhint %}

## Listing downloaded files

{% hint style="info" %}
If the test involves downloading a very large file, we recommend adding a generous wait using the `I.wait` command beforehand.
{% endhint %}

You can list files that are downloaded using these two methods:

```javascript
// returns a list of files, without logging to the test report
let downloadedFiles = UI.Downloads.files 
```

or

```javascript
// returns a list of files, and logs to the test report
let downloadedFiles = UI.Download.listFiles() 
```

Note that using `listFile()` command doesn't only return the list of files, but also prints it to the test report. You can simply access the `files` property if you don't need the output to be logged in the test report.

The value of `files` property or using `listFiles()` is an array of objects containing metadata about the files in the "Downloads" folder, for example:
```javascript
[ 
	// file 1
	{ 
		// name of the file
		"name": "file1.pdf", 
		// location of the file
		"path": "//downloads/file1.pdf",
		// date when the file is created in epoch seconds
		"lastModified": 1678863067, 
		// size of the file in bytes
		"size": 2142210 
	}, 
	// file 2
	{ 
		"name": "file2.pdf", 
		"path": "//downloads/file2.pdf", 
		"last_modified": 1678863088, 
		"size": 3058254 
	} 
]
``` 

As this is a standard Javascript array, you can access individual items by index, and you can loop through the array, using the `.forEach` function.

## Accessing the most recently downloaded file

{% hint style="info" %}
If the test involves downloading a very large file, we recommend adding a generous wait using the `I.wait` command beforehand.
{% endhint %}

The `UI.Downloads.files` property and `UI.Downloads.listFiles()` command returns the list of files, sorted from oldest first, to newest last.

You can access the mostly recently downloaded file using the `.last` property.

```javascript
// get the name of the most recently downloaded file
let mostRecentlyDownloadedFile = UI.Downloads.files.last.name
```

You can also access the oldest downloaded file using the `.first` property.

## Validating if a file has been downloaded

You can use the `UI.Downloads.hasFile` command to validate if a file has been downloaded. The .hasFile command will wait up to 15 seconds to check for the existence of the file. You can change this threshold by changing the `TEST.commandTimeout` configuration. 

Pass in the name of the file that you want to validate like this:

```javascript
UI.Downloads.hasFile("fileA.pdf")
```

In the above example, the test will pass if “fileA.pdf” has been downloaded, and fail if the file is not found in the virtual “downloads” folder..

You can also use a regular expression if in case part of the file name is dynamically generated.

```javascript
// this will pass for a file named "file-1678863088.pdf"
UI.Downloads.hasFile(/(file-)(.*)(\.pdf)/i)
```

The test will pass if a file with a name matching the regular expression is found in the virtual “downloads” folder.

The `UI.Downloads.hasFile`  returns a boolean result depending on the presence of the file, so you can use it in a conditional flow, for example:

```javascript
// Using the $ postfix, the hasFile$ command will not raise an error 
// when the file is not found and simple return false
if(UI.Downloads.hasFile$("fileA.pdf")){
	
	// if the file is downloaded, upload it to 
  // the "Supporting documents" file input field
	I.upload("Supporting documents", "//downloads/fileA.pdf") 

}
```

## Validate if a downloaded file has a minimum size

{% hint style="info" %}
If the test involves downloading a very large file, we recommend adding a generous wait using the `I.wait` command beforehand.
{% endhint %}

You can read the size of the file from the file object’s `size` property. This could be useful for validating that server generated files are not empty. 

Here’s an example that checks each downloaded file, and validates using the TEST.assert command that the file size are at least 1 byte.

```javascript
UI.Downloads.files.forEach((file)=>{
  // TEST.assert(condition, message)
  TEST.assert(file.size > 1, "File must be at least 1 byte.")
}) 
```

## Uploading a downloaded file

{% hint style="info" %}
If the test involves downloading a very large file, we recommend adding a generous wait using the `I.wait` command beforehand.
{% endhint %}

After a file has been downloaded, you can use the file in `I.upload` commands to upload the file. 

To upload a file from the virtual “downloads” directory, add a `//downloads/` prefix to the name of the file to upload, for example:

```jsx
// this will upload "fileA.pdf" from the browser's "Downloads" folder
I.upload("Supporting documents", "//downloads/fileA.pdf")
```

Alternative, you can use the `path` of a file object, like this:

```jsx
// upload the first file
I.upload("Supporting documents", UI.Downloads.files[0].path)

// upload the second file
I.upload("Photo", UI.Downloads.files[1].path)

// upload the most recently donwloaded file
I.upload("Certificate", UI.Downloads.files.last.path)
```

## Downloading the files downloaded by the test

![List of downloaded test files in the test run report](/static/img/uilicious-studio-editor-downloaded-files-tab.png)

Click the **'Downloaded Files'** tab in the test report to view the list of files downloaded during the test run.

Click the **'Download All'** button to download the files as a zip to your computer.

