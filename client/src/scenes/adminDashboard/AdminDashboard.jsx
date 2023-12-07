import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

// AdminDashboard component to manage users
const AdminDashboard = () => {
  // State to store user data
  const [users, setUsers] = useState([]);

  // useEffect hook to fetch user data on component mount
  useEffect(() => {
    // Async function to fetch all users from the backend
    const fetchUsers = async () => {
      const response = await fetch('http://localhost:3001/admin/users', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Asegúrate de manejar el token correctamente
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    // Function to delete a user
    const response = await fetch(`http://localhost:3001/admin/user/${userId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.ok) {
      setUsers(users.filter((user) => user._id !== userId));
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Panel de Administración</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.firstName} {user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>

                <Button color="secondary" onClick={() => handleDelete(user._id)}>Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AdminDashboard;
