import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await fetch('/api/leaderboard');
      const data = await response.json();
      setLeaderboard(data);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1 style={{ color: '#179BAE' }}>Leaderboard</h1>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={index}>
            {user.username} - {user.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;