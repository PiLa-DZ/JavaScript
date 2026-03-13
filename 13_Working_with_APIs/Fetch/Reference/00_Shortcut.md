// ============================================================
// Get all users
console.log(await (await fetch("http://localhost:3000/users")).json());
// Output:
// [
//   { id: 1, name: 'Joel', role: 'Admin' },
//   { id: 2, name: 'Arch_User', role: 'Dev' }
// ]
