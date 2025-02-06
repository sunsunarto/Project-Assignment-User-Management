import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { editUser } from '../services/UserServices.js';
import '../styles/EditUser.css';

function EditUser() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [editedUser, setEditedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setEditedUser(data);
    };
    fetchUser();
  }, [userId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const saveUser = async () => {
    await editUser(userId, editedUser);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className='editPage'>
      {user && (
        <div className='body'>
          <h2>Edit User</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={editedUser.role}
              onChange={handleChange}
            />
          </label>
          <div className='HendleButtons'>
          <button className='save' onClick={saveUser}>Save</button>
          <button className='cancel' onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditUser;
