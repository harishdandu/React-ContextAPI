// Dashboard.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user ? user.username : 'Guest'}</h2>
      {user && <button onClick={logout}>Logout</button>}
    </div>
  );
};

export default Dashboard;