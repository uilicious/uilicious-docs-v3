---
# Write a short description about the page. This will be displayed on google search results.
description: Learn how to use the I.upload command to upload a file in your UIlicious test.
---

# Upload Files

### `I.upload` <a href="#iupload" id="iupload"></a>

Upload a file.

#### Usage <a href="#usage" id="usage"></a>

```javascript
I.upload(field, pathToFile)
```

**Parameters**

| Parameter  | Type   | Remarks                                                                                                                    |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| field      | string | Keyword to identify the file upload field                                                                                  |
| pathToFile | string | <p>Path to the file to upload.<br><strong>Currently, only absolute paths from the project root are supported.</strong></p> |

#### Example <a href="#example" id="example"></a>

First, you need to add the file to be used for testing file upload to the UI-licious test project.

Click on the "plus" button in the workspace pane to open the "Add file" dialog.

![](https://docs.uilicious.com/images/i\_upload\_tutorial/add-file.png)

Select the "Upload file" menu, and upload the file to the project.

![](https://docs.uilicious.com/images/i\_upload\_tutorial/upload-file.png)

Finally, specify the absolute or relative path to the file in the `I.upload` command.

![](https://docs.uilicious.com/images/i\_upload\_tutorial/i-upload-command.png)

This will upload "cat.jpg" to the "Start uploading" file input field in our test application.
