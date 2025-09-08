// models/userModel.js
const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "User" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "User" },
    { id: 4, name: "David", email: "david@example.com", role: "Moderator" },
    { id: 5, name: "Eva", email: "eva@example.com", role: "User" },
    { id: 6, name: "Frank", email: "frank@example.com", role: "User" },
    { id: 7, name: "Grace", email: "grace@example.com", role: "Admin" },
    { id: 8, name: "Hannah", email: "hannah@example.com", role: "User" },
    { id: 9, name: "Ian", email: "ian@example.com", role: "User" },
    { id: 10, name: "Jane", email: "jane@example.com", role: "Moderator" }
];

exports.getAllUsers = () => users;

exports.createUser = (user) => {
  users.push(user);
  return user;
};