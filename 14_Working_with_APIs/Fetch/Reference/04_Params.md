const response = await fetch(`http://localhost:3000/users/${1}`);
if (response.ok) {
  const data = await response.json();
  console.log(data);
}
// [ { id: 1, name: 'Joel', role: 'Admin' } ]
