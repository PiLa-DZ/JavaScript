const response = await fetch(`http://localhost:3000/users/${1}`, {
  method: "DELETE",
});
if (response.ok) {
  const data = await response.text();
  console.log(data);
}
// User 1 deleted.

// ============================================================
// response.text() does exactly what response.json() does
//
// it waits for the data "stream" to finish
// but it treats the result as a raw string
// instead of trying to turn it into a JavaScript object.
