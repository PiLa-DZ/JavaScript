try {
  const newUser = { role: "JustUser" };

  const url = `http://localhost:3000/users/${3}`;

  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error(`Failed to update: ${response.status}`);
  }

  const result = await response.json();
  console.log(result);
} catch (err) {
  console.error(err.message);
}
// Output:
// { id: 3, name: 'myName', role: 'JustUser' }
