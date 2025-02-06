import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../services/UserServices.js';
import '../styles/Home.css';
import AddUser from './AddUser.jsx';

function Home() {
  const [users, setUsers] = useState([]);
  const [showAddMember, setShowAddMember] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleAddMemberClick = () => {
    setShowAddMember(true);
  };

  const handleCloseAddMember = () => {
    setShowAddMember(false);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
      setFilteredUsers(users);
    };
    fetchUsers();
  }, []);
  const handleDelete = async (id) => {
    await deleteUser(id);
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase()) ||
      user.role.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className='home'>
      <div className='addMember'>
        <button className='AddButton' onClick={handleAddMemberClick}>Add Member</button>
        <AddUser show={showAddMember} onClose={handleCloseAddMember} />
      </div>
      <div className='searchBar'>
        <input
          type='text'
          placeholder='Search by name, email, or role'
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table>
        <thead>
          <tr className='category'>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Action</td>
          </tr>
        </thead>
        {filteredUsers.map((user) => (
          <tbody key={user.id}>
            <tr className='detail'>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to={`${user.id}`}>Edit</Link>
                <button className='deleteButton' onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default Home;
