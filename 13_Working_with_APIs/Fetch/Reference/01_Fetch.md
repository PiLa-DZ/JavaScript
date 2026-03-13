```js
const response = await fetch("http://localhost:3000/users");
console.log(response);
/*
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    'x-powered-by': 'Express',
    'content-type': 'application/json; charset=utf-8',
    'content-length': '80',
    etag: 'W/"50-7XGMpPlDq6ZGKn7iPrBKD+IKKJY"',
    date: 'Mon, 09 Mar 2026 22:46:35 GMT',
    connection: 'keep-alive',
    'keep-alive': 'timeout=5'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'http://localhost:3000/users'
}
*/
```

### ============================================================
fetch(url): The Response Object

When you await fetch, 
the Promise resolves as soon as the HTTP Headers arrive. 
It doesn't wait for the whole body to download.

What it contains: 
    Status codes (200, 404), Headers (Content-Type), and the .ok boolean.

The Console Output: 
    You will see a Response object. 
    It looks like a "Metadata" summary.
