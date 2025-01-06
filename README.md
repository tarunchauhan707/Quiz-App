# Quiz App

The Quiz App is a web application that allows users to take quizzes, track their scores, and manage quizzes efficiently. This project consists of a frontend built with React and a backend built with Node.js and Express.

## Live Demo

[Access the Quiz App here](#) *(Add your live demo link here)*

## Features

- **User Authentication**: Secure user registration and login using JWT.
- **Quiz Management**: Create, edit, and delete quizzes.
- **Score Tracking**: Track user scores and display leaderboard.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, React Router, Bootstrap
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT for authentication
- **Development Tools**: Nodemon, Axios

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (for database management)

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/tarunchauhan707/Quiz-App.git
cd Quiz-App
```

### 2. Install Dependencies

Navigate to the project directory and install the dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

### 4. Running the Project

#### Running the Overall Project

To run the entire project, navigate to the root directory of the project in your terminal and use the following command:

```bash
npm start
```

This command will:
- Start the backend server
- Build the frontend and serve it from the backend

#### Running the Frontend Separately

To run the frontend separately, navigate to the `frontend` directory in your terminal and use the following command:

```bash
npm start
```

This command will start the frontend development server on `http://localhost:3000`.

#### Running the Backend Separately

To run the backend separately, navigate to the `backend` directory in your terminal and use the following command:

```bash
npm start
```

This command will start the backend server on `http://localhost:5000`.

## Deployment

The project is deployed on [Vercel](https://vercel.com/). For redeployment:

1. Push the changes to the `main` branch.
2. Ensure environment variables are configured in the Vercel dashboard.

## Contributing

Contributions are welcome! To contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes:**
   ```bash
   git commit -m "Add your message"
   ```
4. **Push to the branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request.**

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/) for the frontend framework.
- [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/) for the backend framework.
- [MongoDB](https://www.mongodb.com/) for the database.
- [Vercel](https://vercel.com/) for the deployment platform.

## Contact

For any inquiries or issues, please contact:

**Tarun Kumar**  
Email: [tarun.kumarr.23@gmail.com](mailto:tarun.kumarr.23@gmail.com)  
GitHub: [tarunchauhan707](https://github.com/tarunchauhan707)

Feel free to use and modify this README file to fit your needs!
