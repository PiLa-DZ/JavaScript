const response = await fetch(`http://localhost:3000/users/${2}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json", // 2. Tell Server A to expect JSON
  },
  body: JSON.stringify({ role: "SuperAdmin" }), // 3. Turn the JS object into a string
});
if (response.ok) {
  const data = await response.json();
  console.log(data);
}
// { id: 2, name: 'Arch_User', role: 'SuperAdmin' }
