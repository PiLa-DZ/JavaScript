// ============================================================
// Get All Users
try {
  const url = `http://localhost:3000/users`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to read: ${response.status}`);
  }

  const users = await response.json();

  console.log(users);
} catch (err) {
  console.error(err.message);
}
// Output:
// [
//   { id: 1, name: 'Joel', role: 'Admin' },
//   { id: 2, name: 'Arch_User', role: 'SuperAdmin' },
//   { id: 3, name: 'myName', role: 'SuperAdmin' }
// ]

// ============================================================
// Get One Users
try {
  const url = `http://localhost:3000/users/${3}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to read: ${response.status}`);
  }

  const users = await response.json();

  console.log(users);
} catch (err) {
  console.error(err.message);
}
// Output:
// [ { id: 3, name: 'myName', role: 'SuperAdmin' } ]
