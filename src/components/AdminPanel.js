import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';
import Admin from './Admin';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/auth/getalluser', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleSetAdmin = async (id) => {
        try {
            await axios.put(`http://localhost:5000/auth/admin/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            setUsers(users.map(user => user._id === id ? { ...user, isAdmin: true } : user));
        } catch (error) {
            console.error('Error setting admin:', error);
        }
    };


    const handleRemoveAdmin = async (id) => {
        try {
            await axios.put(`http://localhost:5000/auth/removeadmin/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });

            setUsers(users.map(user => user._id === id ? { ...user, isAdmin: false } : user));
        } catch (error) {
            console.error('Error removing admin:', error);
        }
    };


    return (
        <div className="container admin-panel">
            <h2>Admin Panel</h2>
            <h6>User List</h6>
            <ul>
                {users.map((user) => (
                    <li key={user._id}>
                        <span>{user.name} ({user.username})</span>
                        {user.isAdmin ? (
                            <>
                                <span> - Admin</span>
                                <button className="remove-admin" onClick={() => handleRemoveAdmin(user._id)}>Remove Admin</button>
                            </>
                        ) : (
                            <button className="make-admin" onClick={() => handleSetAdmin(user._id)}>Make Admin</button>
                        )}
                    </li>
                ))}
            </ul>
            <div>
                <Admin />
            </div>
        </div>
    );
};      

export default AdminPanel;
