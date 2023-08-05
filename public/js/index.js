// async function getAllUsers() {
//   const data = await fetch('http://localhost:3000/users', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const users = await data.json();
//   console.log(users);
// }

// async function createUser() {
//   const response = await fetch('http://localhost:3000/users', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: 'test-user',
//       email: 'test-user1@gmail.com',
//       password: 'Test1234!',
//       passwordConfirm: 'Test1234!',
//     }),
//   });
//   if (!response.ok) console.log('ERROR');
// }

// createUser();
// getAllUsers();
