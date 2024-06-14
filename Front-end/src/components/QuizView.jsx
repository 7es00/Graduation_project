import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from "../styles/home/master.module.css";
import { useUser } from './UserContext'; // Import useUser hook

function QuizView() {
    const apiUrl = 'https://api.roadx.site/api/quizzes';
    const [quizzes, setQuizzes] = useState([]);
    const [answers, setAnswers] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const questionsPerPage = 2;
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [score, setScore] = useState(null);
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const location = useLocation();
    const { name, level } = location.state || { name: 'Default Track', level: 'Intermediate' };
    const { user } = useUser();
    const userId = user.userId;
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

    useEffect(() => {
        fetchQuizzes(level, name);

        // Timer logic
        const timerId = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timerId);
                    handleTimeout();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timerId);
    }, [level, name]);

    const fetchQuizzes = (level, stackName) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const filteredQuizzes = data.filter(quiz => quiz.level === level && quiz.stack.name === stackName);
                setQuizzes(filteredQuizzes);
                setTotalQuestions(filteredQuizzes.length);
            })
            .catch(error => {
                console.error('Error fetching quizzes:', error);
                alert('Failed to fetch quizzes. Please try reloading the page.');
            });
    };

    const handleOptionClick = (quizId, option) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [quizId]: option
        }));
    };

    const submitAllAnswers = () => {
        let correctAnswersCount = 0;
        quizzes.forEach(quiz => {
            if (answers[quiz.id] === quiz.Correct_Answer) {
                correctAnswersCount++;
            }
        });
        setScore(`${correctAnswersCount} correct out of ${totalQuestions}`);
        setQuizSubmitted(true);

        const resultsData = {
            score: correctAnswersCount,
            totalQuestions: totalQuestions,
            correctAnswers: correctAnswersCount,
            userAnswers: answers,
            studentId: userId
        };

        postResultsToAPI(resultsData);

        // Show SweetAlert2 popup
        Swal.fire({
            title: 'Your Degree',
            text: `${correctAnswersCount} correct out of ${totalQuestions}`,
            icon: 'success',
            confirmButtonText: 'Done'
        }).then(() => {
            navigate('/'); // Redirect to the home page
        });
    };

    const postResultsToAPI = (data) => {
        fetch('https://api.roadx.site/api/submit-quiz-results', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log('Success:', data))
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit quiz results. Please try again.');
        });
    };

    const handleTimeout = () => {
        Swal.fire({
            title: 'Time Out',
            text: 'Your time for this quiz has ended.',
            icon: 'warning',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/'); // Redirect to the home page
        });
    };

    // Calculate current quizzes to display based on pagination
    const indexOfLastQuiz = currentPage * questionsPerPage;
    const indexOfFirstQuiz = indexOfLastQuiz - questionsPerPage;
    const currentQuizzes = quizzes.slice(indexOfFirstQuiz, indexOfLastQuiz);

    // Display time left in minutes and seconds
    const displayTimeLeft = `${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`;

    // Determine if the background should be red
    const timerStyle = timeLeft <= 120 ? { backgroundColor: '#D40F0F', color: 'white', padding: '10px', borderRadius: '5px' } : {};

    return (
        <div className={styles.app}>
            <h1 className={styles.headerQuiz}>{name} - {level} Quiz</h1>
            {quizSubmitted && (
                <div className={styles.scoreDisplay}>
                    Your Degree: {score}
                </div>
            )}
            {!quizSubmitted && (
                <div className={styles.timer} style={timerStyle}>
                    Time Left: {displayTimeLeft}
                </div>
            )}
            {currentQuizzes.map((quiz, index) => (
                <div key={quiz.id} className='styles.paginationInfo pt-5'>
                    <h2 className='question py-3'>{`Q${indexOfFirstQuiz + index + 1}: ${quiz.Question}`}</h2>
                    <ul className={styles.options}>
                        {['A', 'B', 'C'].map(option => (
                            <li key={option}
                                className={answers[quiz.id] === option ? styles.selected : styles.option}
                                onClick={() => handleOptionClick(quiz.id, option)}>
                                {quiz[option]}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <div className='pt-5'>
                <p>{`Page ${currentPage} of ${Math.ceil(totalQuestions / questionsPerPage)} (Questions ${indexOfFirstQuiz + 1} to ${indexOfLastQuiz} of ${totalQuestions})`}</p>
            </div>
            <div className={styles.pagination}>
                {currentPage > 1 && <button className={styles.paginationButton} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>}
                {currentPage * questionsPerPage < totalQuestions && <button className={styles.paginationButton} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>}
                {currentPage * questionsPerPage >= totalQuestions && <button className={styles.paginationButton} onClick={submitAllAnswers}>Submit All Answers</button>}
            </div>
        </div>
    );
}

export default QuizView;
