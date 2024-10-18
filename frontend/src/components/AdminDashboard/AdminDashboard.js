import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

const AdminDashboard = () => {
  const navigate = useNavigate();  // Hook for navigation

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>

      {/* Add Quiz Section */}
      <Card className="mb-4">
        <Card.Header as="h2" className="bg-success text-white">Add New Quiz</Card.Header>
        <Card.Body>
          <Button variant="primary" onClick={() => navigate('/addquiz')}>
            Create Quiz
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminDashboard;
