try {
  const newUser = { name: "myName", role: "SuperAdmin" };

  const url = `http://localhost:3000/users`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error(`Failed to create: ${response.status}`);
  }

  const result = await response.json();
  console.log(result);
} catch (err) {
  console.error(err.message);
}
// Output:
// { id: 3, name: 'myName', role: 'SuperAdmin' }
