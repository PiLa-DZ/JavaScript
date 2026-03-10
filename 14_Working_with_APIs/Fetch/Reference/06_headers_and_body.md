const response = await fetch(`http://localhost:3000/users`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // 2. Tell Server A to expect JSON
  },
  body: JSON.stringify({ name: "Groot", role: "Guard" }), // 3. Turn the JS object into a string
});
if (response.ok) {
  const data = await response.json();
  console.log(data);
}
// { id: 8, name: 'Groot', role: 'Guard' }

// ============================================================
// Clean Code
const url = `http://localhost:3000/users`;
const user = { name: "Groot", role: "Guard" };

const response2 = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // 2. Tell Server A to expect JSON
  },
  body: JSON.stringify(user), // 3. Turn the JS object into a string
});

if (response2.ok) {
  const data = await response2.json();
  console.log(data);
}
// { id: 9, name: 'Groot', role: 'Guard' }
