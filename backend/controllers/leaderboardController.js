import User from '../models/User.js';

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await User.find().sort({ score: -1 }).limit(10);
    res.json(leaderboard);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateScore = async (req, res) => {
  const { username, score } = req.body;
  if (!username || typeof score !== 'number') {
    return res.status(400).json({ message: 'Invalid input' });
  }
  try {
    const user = await User.findOneAndUpdate(
      { username },
      { score },
      { new: true, useFindAndModify: false }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error updating score:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
