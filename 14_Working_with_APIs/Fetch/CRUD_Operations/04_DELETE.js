try {
  const url = `http://localhost:3000/users/${3}`;

  const response = await fetch(url, { method: "DELETE" });

  if (!response.ok) {
    throw new Error(`Failed to delete: ${response.status}`);
  }

  const users = await response.text();

  console.log(users);
} catch (err) {
  console.error(err.message);
}
// User 3 deleted.
