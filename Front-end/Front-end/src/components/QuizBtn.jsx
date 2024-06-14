import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUser } from "./UserContext";
import { Link } from "react-router-dom";
import "../styles/stack/quizeBox.css";

function QuizBtn({ data }) {
    let navigate = useNavigate();
    const { user } = useUser(); // Access the user object from the context
    const userId = user?.userId;

    const handleButtonClick = (level) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Do you want to start the ${level} quiz?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, start quiz!',
            cancelButtonText: 'No, stay here'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/quizzes", { state: { name: data, level: level } });
            }
        });
    };

    // Only render buttons if userId is provided
    if (!localStorage.getItem("loggedin")) {
        return (
            <div className="container py-3 mb-5">
                <div className="row">
                    <div className="col-12 py-lg-5">
                        <div className="fs-1 text-center my-5 sectionHead coloredText py-5">Test Yourself</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="quizeSection">
                            <div className="d-flex flex-wrap flex-lg-nowrap align-items-start">
                                <div className="nav flex-column nav-pills px-4 py-5 py-lg-4 col-12 col-lg-3 me-3 rounded-4 quizeLevel" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <span className="fs-2 sectionHead coloredText">Level</span>
                                    <button className="nav-link mt-3 mt-lg-5 active" id="v-pills-beginner-tab" data-bs-toggle="pill" data-bs-target="#v-pills-beginner" type="button" role="tab" aria-controls="v-pills-beginner" aria-selected="true">Beginner</button>
                                    <button className="nav-link mt-3 mt-lg-5" id="v-pills-intermediate-tab" data-bs-toggle="pill" data-bs-target="#v-pills-intermediate" type="button" role="tab" aria-controls="v-pills-intermediate" aria-selected="false">Intermediate</button>
                                    <button className="nav-link mt-3 mt-lg-5" id="v-pills-advanced-tab" data-bs-toggle="pill" data-bs-target="#v-pills-advanced" type="button" role="tab" aria-controls="v-pills-advanced" aria-selected="false">Advanced</button>
                                </div>
                                <div className="tab-content shadow-sm rounded-4 mt-4 mt-lg-0 px-4 py-5 py-lg-4 col-12 col-lg-9 ms-lg-3 quizeContainer" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active quizeBox" id="v-pills-beginner" role="tabpanel" aria-labelledby="v-pills-beginner-tab">
                                        <p className="mainHead text-center">Please login to access the quiz. <br></br><Link to="/#form" className="text-decoration-none">Login</Link></p>
                                    </div>
                                    <div className="tab-pane fade quizeBox" id="v-pills-intermediate" role="tabpanel" aria-labelledby="v-pills-intermediate-tab">
                                        <p className="mainHead text-center">Please login to access the quiz. <br></br><Link to="/" className="text-decoration-none">Login</Link></p>
                                    </div>
                                    <div className="tab-pane fade quizeBox" id="v-pills-advanced" role="tabpanel" aria-labelledby="v-pills-advanced-tab">
                                        <p className="mainHead text-center">Please login to access the quiz.<br></br><Link to="/" className="text-decoration-none">Login</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-3 mb-5">
            <div className="row">
                <div className="col-12 py-lg-5">
                    <div className="fs-1 text-center my-5 sectionHead coloredText py-5">Test Yourself</div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="quizeSection">
                        <div className="d-flex flex-wrap flex-lg-nowrap align-items-start">
                            <div className="nav flex-column nav-pills px-4 py-5 py-lg-4 col-12 col-lg-3 me-3 rounded-4 quizeLevel" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <span className="fs-2 sectionHead coloredText">Level</span>
                                <button className="nav-link mt-3 mt-lg-5 active" id="v-pills-beginner-tab" data-bs-toggle="pill" data-bs-target="#v-pills-beginner" type="button" role="tab" aria-controls="v-pills-beginner" aria-selected="true">Beginner</button>
                                <button className="nav-link mt-3 mt-lg-5" id="v-pills-intermediate-tab" data-bs-toggle="pill" data-bs-target="#v-pills-intermediate" type="button" role="tab" aria-controls="v-pills-intermediate" aria-selected="false">Intermediate</button>
                                <button className="nav-link mt-3 mt-lg-5" id="v-pills-advanced-tab" data-bs-toggle="pill" data-bs-target="#v-pills-advanced" type="button" role="tab" aria-controls="v-pills-advanced" aria-selected="false">Advanced</button>
                            </div>
                            <div className="tab-content shadow-sm rounded-4 mt-4 mt-lg-0 px-4 py-5 py-lg-4 col-12 col-lg-9 ms-lg-3 quizeContainer" id="v-pills-tabContent">
                                <div className="tab-pane fade show active quizeBox" id="v-pills-beginner" role="tabpanel" aria-labelledby="v-pills-beginner-tab">
                                    <p className="mainHead">Ready to Test Your Knowledge? Take Our Free Beginner Quiz!</p>
                                    <p className="text-center quizeHint">Are you curious to see how much you already know about Topics and concepts in {data} field? This fun and free quiz is designed for beginners, with 10 multiple-choice questions to challenge your understanding.</p>
                                    <p className="mainHead">Here's what you can expect:</p>
                                    <ul>
                                        <li className="quizeHint list">Quick and easy: 10 multiple-choice questions make it a breeze to complete.</li>
                                        <li className="quizeHint list">Designed for beginners: Perfect for anyone starting their journey.</li>
                                        <li className="quizeHint list">Take it again! No pressure – you can retake the quiz as many times as you like.</li>
                                    </ul>
                                    <p className="mainHead">Ready to get started? Click the button below to begin!</p>
                                    <button className="button" type="button" onClick={() => handleButtonClick("Beginner")}>
                                        Ready {" "}
                                    </button>
                                </div>
                                <div className="tab-pane fade quizeBox" id="v-pills-intermediate" role="tabpanel" aria-labelledby="v-pills-intermediate-tab">
                                    <p className="mainHead">Level Up Your Knowledge: Take Our Intermediate Challenge!</p>
                                    <p className="text-center quizeHint">Think you've mastered the basics of {data} ? Put your skills to the test with our free intermediate quiz to {data} ! This 10-question multiple-choice challenge delves deeper into Topics and concepts of {data} , pushing your understanding beyond the introductory level.</p>
                                    <p className="mainHead">Here's what you can expect:</p>
                                    <ul>
                                        <li className="quizeHint list">Free and accessible: Sharpen your knowledge without any cost.</li>
                                        <li className="quizeHint list">10 thought-provoking questions: Designed to engage intermediate learners.</li>
                                        <li className="quizeHint list">Test your grasp of concepts: Move beyond basic knowledge and demonstrate your comprehension.</li>
                                        <li className="quizeHint list">Take it multiple times: Refine your understanding by retaking the quiz.</li>
                                    </ul>
                                    <p className="mainHead">Ready to get started? Click the button below to begin!</p>
                                    <button className="button" type="button" onClick={() => handleButtonClick("Intermediate")}>
                                        Ready{" "}
                                    </button>
                                </div>
                                <div className="tab-pane fade quizeBox" id="v-pills-advanced" role="tabpanel" aria-labelledby="v-pills-advanced-tab">
                                    <p className="mainHead">Master Your Knowledge: Conquer Our Advanced Quiz!</p>
                                    <p className="text-center quizeHint">Ready to prove your expertise in all Topics and concepts of {data}? This free, 10-question quiz is designed to challenge even the most advanced learners. Dive deep into complex concepts and demonstrate your mastery of the subject.</p>
                                    <p className="mainHead">This quiz is for you if:</p>
                                    <ul>
                                        <li className="quizeHint list">You possess a strong foundation in {data}.</li>
                                        <li className="quizeHint list">You're eager to apply your understanding to nuanced scenarios.</li>
                                        <li className="quizeHint list">You crave a challenge to test your in-depth knowledge.</li>
                                        <li className="quizeHint list">Test your critical thinking: Move beyond basic recall and apply your knowledge.</li>
                                    </ul>
                                    <p className="mainHead">Are you ready to embark on this intellectual odyssey? Click below to begin!</p>
                                    <button className="button" type="button" onClick={() => handleButtonClick("Advanced")}>
                                        Ready{" "}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizBtn;
