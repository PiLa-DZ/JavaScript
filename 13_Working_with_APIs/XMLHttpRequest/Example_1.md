1. XMLHttpRequest (The Legacy)

XMLHttpRequest (XHR) --> "Legacy/Callback" way, 

Before 2015, 
this was the only way to get data without refreshing the page. 
It uses an Event-Based model rather than Promises.

Syntax: 
    It is notoriously "wordy." 
    You have to track the readyState 
    and manually check status codes.

The Problem: 
    It leads to "Callback Hell" 
    if you need to make multiple dependent requests.

```js
// The "Old School" way
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.send();
```
