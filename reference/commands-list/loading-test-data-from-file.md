# Loading Test Data from File

These commands allow you to load test data from files in supported formats.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command                                                                                                          | Description                        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`TEST.loadDataFromCsv`](https://docs.uilicious.com/scripting/load\_data\_from\_file.html#testloaddatafromcsv)   | Loads test data from a .csv file.  |
| [`TEST.loadDataFromJson`](https://docs.uilicious.com/scripting/load\_data\_from\_file.html#testloaddatafromjson) | Loads test data from a .json file. |

***

### `TEST.loadDataFromCsv` <a href="#testloaddatafromcsv" id="testloaddatafromcsv"></a>

Loads entries from a .csv (comma-separated value) file.

Returns an array of JSON objects, or a single JSON object if `dataset` is specified.

The header will be used as the property names. By default, the first **column** will be used as the header. You can change this configuration to read the first row as the header by setting the `header` option (see below).

#### Usage <a href="#usage" id="usage"></a>

```javascript
// load all entries
TEST.loadDataFromCsv(file, options)

// load one entry
TEST.loadDataFromCsv(file, dataset, options)
```

Returns an array of JSON objects, or a single JSON object if `dataset` is specified.

**Parameters**

| Parameter | Type     | Remarks                                                                      |
| --------- | -------- | ---------------------------------------------------------------------------- |
| file      | `string` | Relative or absolute path to the file to load                                |
| dataset   | `string` | Optional. Expression for selecting the dataset to load. e.g. `country=korea` |
| options   | `object` | <p>Optional.<br>See options below</p>                                        |

**Options**

| Option    | Type     | Remarks                                                                                                                                                                                                                              |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| header    | `string` | <p>Set to <code>row</code> to indicate that the header (which will be used as the property names) is the first row, or set to <code>col</code> to indicate that the header is the first column.<br>Defaults to <code>col</code>.</p> |
| dataset   | `string` | Optional. Expression for selecting the dataset to load. e.g. `country=korea`                                                                                                                                                         |
| escape    | `string` | Set the escape character, applies to quote and escape characters inside quoted fields. Defaults to `\"`.                                                                                                                             |
| delimiter | `string` | Set the delimiter charater. Defaults to `,` (comma).                                                                                                                                                                                 |

#### Examples(s) <a href="#exampless" id="exampless"></a>

**Read all entries from a CSV file**

In this example, we have a file "credentials.csv" in our project, where the header is the first **row**:

```
username,password
johndoe,jane
'super secret password','qwerty123'
```

We can use `TEST.loadDataFromCsv` to load the data from "credentials.csv" as such:

```javascript
// This loads entries from "credentials.csv" into an object array, 
// using values in the first row as property name.
var userList = TEST.loadDataFromCsv("credentials.csv", {header: "row"})
// Result:
//   users = [
//     {"username" : "johndoe", "password" : "super secret password"},
//     {"username" : "jane", "password" : "qwerty123"}
//   ]
//
var johndoe = userList[0]
I.goTo("https://example.com")
I.fill("Username", johndoe.username)
I.fill("password", johndoe.password)
I.click("Login")
```

**Read a single entry from CSV**

In this example, we have a file "credentials.csv" in our project, where the header is the first **row**:

```
username,password
johndoe,jane
'super secret password','qwerty123'
```

We can pick a single entry from the CSV file to load as a JSON object using the `dataset` parameter as such:

```javascript
// This loads only the entry where "username" equals "johndoe" from "credentials.csv" into an object, 
// using values in the first row as property name.
var user = TEST.loadDataFromCsv("credentials.csv", "username=johndoe", {header: "row"})
// Result:
//   user = {"username" : "johndoe", "password" : "super secret password"}
//
I.goTo("https://example.com")
I.fill("Username", user.username)
I.fill("password", user.password)
I.click("Login")
```

**Read first column as header**

In this example, we have a file "credentials.csv" in our project, where the header is the first **column**:

```
username,johndoe,jane
password,'super secret password','qwerty123'
```

We can specify the `header` option to `col` to read the first column as the header:

```javascript
// This loads only the entry where "username" equals "johndoe" from "credentials.csv" into an object, 
// using values in the first column as property name.
var user = TEST.loadDataFromCsv("credentials.csv", "username=johndoe", {header: "col"})
// Result:
//   user = {"username" : "johndoe", "password" : "super secret password"}
//
I.goTo("https://example.com")
I.fill("Username", user.username)
I.fill("password", user.password)
I.click("Login")
```

***

### `TEST.loadDataFromJson` <a href="#testloaddatafromjson" id="testloaddatafromjson"></a>

Loads data from a .json (javascript object notation) file.

Returns the test data as a json object. Nested data structure is supported.

#### Usage <a href="#usage" id="usage"></a>

```javascript
TEST.loadDataFromJson(file)
```

Returns the test data as a json object.

**Parameters(s)**

| Parameter | Type     | Remarks                                       |
| --------- | -------- | --------------------------------------------- |
| file      | `string` | Relative or absolute path to the file to load |

#### Examples(s) <a href="#exampless" id="exampless"></a>

"credentials.json" file:

```json
{
    "john": {
        "username": "johndoe", 
        "password": "supersecretpassword", 
    },
    "adele": {
        "username": "adele", 
        "password": "hello from the other side", 
    }
}
```

Test Script:

```javascript
var users = TEST.loadDataFromJson("credentials.json")
var john = users.john
I.fill("Username", john.username)
I.fill("Password", john.password)
```
