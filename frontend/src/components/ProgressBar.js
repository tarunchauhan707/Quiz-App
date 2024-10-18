import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
    const progressPercentage = (currentQuestion / totalQuestions) * 100;

    return (
        <div style={styles.container}>
            <div style={{ ...styles.progress, width: `${progressPercentage}%` }} />
        </div>
    );
};

const styles = {
    container: {
        height: '20px',
        width: '100%',
        backgroundColor: '#e0e0df',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '20px',
    },
    progress: {
        height: '100%',
        backgroundColor: '#15B392',
        transition: 'width 0.5s ease-in-out',
    },
};

export default ProgressBar;