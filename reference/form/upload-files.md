---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.upload command to upload a file in your UIlicious test.
---

# Upload Files

You can use the `I.upload` command to upload a file to a file input field.

## Uploading a file

First, you need to add the file to be uploaded into the test project.

You can drag and drop the file from your computer into the project directory. Alternatively, you can click on the "plus" button above the project directory to open the "Add file" dialog.

![Adding a file to the project by drag and drop](/static/img/uilicious-studio-drag-a-file-into-project.gif)

Next, use the `I.upload` command in your test file to upload the file during the test, for example:

```javascript
// This will upload the file "images/cat.png" within your test project
// to the input field which the "name" attribute set to "profile-picture"
I.upload("input[name='profile-picture']", "images/cake.png")
```

## Uploading a file to a drag-and-drop file upload component

Unfortunately, there isn't a way to drag a file from the operating system into a droppable file upload component on the webpage using UIlicious.

However, most drag-and-drop file upload components typically have a underlying native HTML5 file input field that is hidden to humans, but accessible to robots.

To find the underlying file input field, you (or your frontend developer) will need to inspect the webpage to find the `<input type="file">` element that is paired with the drag-and-drop file upload component. 

Assuming that there's only one file input field on the page, the following command will work:
```javascript
I.upload("input[type=file]", "path/to/the/file_to_upload.png")
```

However, if there's more than one file input field, you'll have to use a more specific CSS or XPATH expression to target the desired file input field.

## Uploading a downloaded file

You can also upload a file that has been downloaded during the test. Files will be saved to a virtual "Downloads" folder during test execution. 

You may reference files in the virtual folder by adding "//downloads" before the downloaded file name, for example:

```jsx
// this will upload "fileA.pdf" from the browser's "Downloads" folder
I.upload("Supporting documents", "//downloads/fileA.pdf")
```

Alternative, you can access the list of downloaded files using `UI.Downloads.files` property, and then reference the `path` property of the downloaded file you wish to use in the `I.upload` command.

```jsx
// upload the first file
I.upload("Supporting documents", UI.Downloads.files[0].path)

// upload the second file
I.upload("Photo", UI.Downloads.files[1].path)

// upload the most recently donwloaded file
I.upload("Certificate", UI.Downloads.files.last.path)
```

## Reference

**Usage**
```javascript
I.upload(fileInputField, pathToFile)
```

**Parameters**
| Parameter  | Type   | Remarks                                                                                                                    |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| fileInputField | string | Selector to target the file input field |
| pathToFile | string | Path to the file to upload. |

