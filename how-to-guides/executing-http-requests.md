# Executing HTTP Requests



## Making HTTP requests <a href="#making-http-requests" id="making-http-requests"></a>

> **WARNING, advanced content ahead.**
>
> This requires you to have programming knowledge and a basic understanding of how browsers communicate to web servers to send and receive data via HTTP.

In this section, we'll cover commands for making HTTP requests.

### Use cases <a href="#use-cases" id="use-cases"></a>

There are many reasons why you might consider making HTTP requests within your UI tests, these are some common use cases:

* Set up test data at the start of a test, e.g. create a product
* Clear test data at the end of a test, e.g. delete a product
* Trigger a process in the middle of a test, e.g. close an order

**How about API testing?**

While it is possible to perform API tests using UI-licious using the commands covered in this section, we do not recommend using UI-licious for API testing.

There are better-suited tools, such as mocha.js with chai-http, which can execute API tests much much faster (because it don't involve spawning a test browser session and capturing screenshots at every step) and have better support for asserting API responses.

We advise performing HTTP requests within your UI-licious tests only when they are needed to facilitate your end-to-end user journey tests.

### How it works <a href="#how-it-works" id="how-it-works"></a>

**The execution context**

The `UI.http` commands run the execution context of the browser itself, similar to the `UI.execute` command.

It's essentially the same as opening the developer's console on the browser and running the following:

```javascript
// for example, to perform a GET request on the browser:
var method = "GET";
var url = "http://mystore.com/api/product?id=123";
var async = false;
var request = new XMLHttpRequest();
request.open(method, url, async);
request.send();
var response = request.response; // <- contains the API response body
```

**Session cookies**

This means the HTTP requests will automatically send to the server any cookies that has been set on the browser for the domain of the current page. A scenario where this might be useful would be when the test interacts with the UI to login as a user, and then performs http requests to the server to get information or perform operations as the logged in user.

**Cross-Origin Resource Sharing**

However, this will also mean than the HTTP requests are subject to the security policies of the browser, such as CORS (Cross-Origin Resource Sharing) policies. Many modern browsers do not allow HTTP requests to be send to a URI that has a different domain from the current page.

### List of commands <a href="#list-of-commands" id="list-of-commands"></a>

| Command          | Description                             |
| ---------------- | --------------------------------------- |
| `UI.httpGet`     | Do a http request with the GET method.  |
| `UI.httpPost`    | Do a http request with the POST method. |
| `UI.httpRequest` | Do a http request.                      |

#### Usage: <a href="#usage" id="usage"></a>

```javascript
// do GET request
var response = UI.httpGet(url)
var response = UI.httpGet(url, options)

// do POST request
var response = UI.httpPost(url)
var response = UI.httpPost(url, options)

// do HTTP request
var response = UI.httpRequest(options)
```

**Parameter(s)**

| Parameter | Type   | Remarks                                                      |
| --------- | ------ | ------------------------------------------------------------ |
| url       | string | The url to send the HTTP request to.                         |
| options   | object | Options to configure the HTTP request. (see 'Options' below) |

**The `options` object**

| Parameter       | Type    | Remarks                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url             | string  | For `UI.httpRequest` command: The url to send the HTTP request to.                                                                                                                                                                                                                                                                                         |
| method          | string  | <p>The HTTP method to use, e.g. GET, HEAD, OPTIONS, POST, PUT, PATCH, DELETE.<br>Ignored when <code>UI.httpGet</code> and <code>UI.httpPost</code> commands are used.</p>                                                                                                                                                                                  |
| data            | object  | <p>The request data to send. Ignored for <code>GET</code> and <code>HEAD</code> methods.<br>If data is a json object, and <code>content-type</code> header is not specified, the <code>content-type</code> will automatically default to <code>application/json;charset=utf-8</code></p>                                                                   |
| params          | object  | <p>Key-value map to set the url search parameters.<br>E.g. Given <code>{product: 1, currency: ['USD', 'JPY']}</code>, this sets the url search parameter to <code>?product=1&#x26;currency=USD&#x26;currency=JPY</code>.<br>If you need arrays to be serialised differently, you will need to pass the values as a string literal instead of an array.</p> |
| responseType    | string  | <p>The expected response type.<br>By default, the response's <code>data</code> object will contain the raw response body as a <code>string</code>.<br>If set to <code>"json"</code>, the response's <code>data</code> object will be automatically parsed to JSON.</p>                                                                                     |
| headers         | object  | Map of request headers to set.                                                                                                                                                                                                                                                                                                                             |
| auth            | object  | Basic authentication credentials. This should be a map containing values for `username` and `password`. Overrides the `Authorization` header.                                                                                                                                                                                                              |
| withCredentials | boolean | Defaults to `true`. If `true`, allows cross-site requests to be made using credentials such as cookies, Authorization headers or TLS client certificates, and allows cookies from response to be set. If this is `false`, you might get CORS or Network errors (reported error may be different across browsers) when making cross-site requests.          |

**Returned object**

| Parameter    | Type   | Remarks                                                                                                                                                      |
| ------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| status       | number | The status code, e.g. 200, 404, 500                                                                                                                          |
| statusText   | string | The status text, e.g. "OK", "Not Found", "Internal Server Error"                                                                                             |
| responseType | string | The response type, e.g. "json"                                                                                                                               |
| data         | object | The response body. If responseType is `"json"`, this is automatically parsed into JSON object. Otherwise, this is a string containing the raw response body. |

**Assertion behaviors**

If the response status code is less than 400, the assertions for these commands will pass. Otherwise, the assertions for these commands will fail, and you'll get an error indicating status of the response.

If you want the errors to be ignored in the report, you can append '$' symbol to the end of the command to use the error supression mode, for example:

```javascript
// this url gives us a 404 Not Found error, but we can use `httpGet$` to suppress the error
var response = UI.httpGet$("https://google.com/notfound")
```

#### Examples <a href="#examples" id="examples"></a>

**Perform a GET request**

```javascript
// go to the pet store
I.goTo("https://petstore.swagger.io")

// get a pet using it's ID 
let res = UI.httpGet("https://petstore.swagger.io/v2/pet/9216678377732869000")

// log the response data 
if(res.status === 404){
    TEST.log.fail("Pet not found") 
} else {
    TEST.log.info("Response from API is: " + JSON.stringify(res.data)) 
}
```

**Perform a POST request**

```javascript
// go to the pet store
I.goTo("https://petstore.swagger.io")

// update pet "0"
let res = UI.httpPost("https://petstore.swagger.io/v2/pet", 
    {
        // form data to send
        data: {
            "id": 0,
            "name": "doggie",
            "status": "available"
        },
        // expect response to be json
        responseType: "json", 
    }
)

// log the response from the API
TEST.log.info("Response from API is: " + JSON.stringify(res.data))
```
