so in fetch we have 2 argoments
1: url
2: object {
      method: 
      headers:
      body:
}

.ok: Returns true only if the status code is between 200 and 299.

The Core: fetch(url, options).
The Options: Method, Headers, and Body are the "Big Three."
The Body Rule: Always JSON.stringify(data) before sending.
The Response Rule: response.ok is your first line of defense; response.json() or response.text() is how you "unwrap" the gift.
