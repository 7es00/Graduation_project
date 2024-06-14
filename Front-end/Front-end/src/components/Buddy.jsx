import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import "../styles/home/buddy.css";

function BuddySection() {
    const [showChatForm, setShowChatForm] = useState(true);
    const [chatMessage, setChatMessage] = useState(""); // State to store the chat message
    const [chatHistory, setChatHistory] = useState([]); // State to store chat history
    const inputRef = useRef(null); // Ref for the input field

    useEffect(() => {
        // Fetch initial chat messages or any other initialization logic here
    }, []);

    const handleChatInputClick = () => {
        inputRef.current.focus();
    };

    async function handleSendMessage() {
        try {
            const response = await axios.get(
                `https://roadxml-23f6660bd654.herokuapp.com/get`,
                {
                    params: {
                        msg: chatMessage, // Send the encoded message as a parameter
                    },
                }
            );

            console.log("API Response:", response.data); // Log API response

            // Update chat history with user's message and bot's response
            const updatedChatHistory = [
                ...chatHistory,
                { text: chatMessage, sender: "user" },
                { text: response.data.msg, sender: "bot" },
            ];

            setChatHistory(updatedChatHistory);
            setChatMessage(""); // Clear the input after sending message
            inputRef.current.focus(); // Focus on the input field
        } catch (error) {
            // Handle API error
            console.error("Error sending message:", error);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevent the default form submission
            handleSendMessage();
        }
    };

    return (
        <section id="buddySection" className="buddy flexCenter">
            <div className="buddyContainer">
                <div className="buddyHeader flexCenter">
                    <div className="buddyLogo flexCenter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c0 2.521.945 4.82 2.49 6.582 1.24 1.52 3.266 3.066 6.439 3.358a9.731 9.731 0 0 0 2.141 0c3.174-.292 5.199-1.839 6.439-3.358A9.948 9.948 0 0 0 22 12c0-5.514-4.486-10-10-10zM4.709 8.724c.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 .843-.133 1.654-.375 2.417-.261.195-.733.474-1.577.756-.769.256-1.672.458-2.685.602a25.337 25.337 0 0 1-6.727 0c-1.013-.144-1.916-.346-2.685-.602-.844-.282-1.316-.561-1.577-.756a7.953 7.953 0 0 1 .335-5.693z"></path><circle cx="8.5" cy="12.5" r="1.5"></circle><circle cx="15.5" cy="12.5" r="1.5"></circle></svg>
                    </div>
                    <div className="details">
                        <h1>Hi, I am Buddy</h1>
                        <p>Welcome! I am here to help you.</p>
                    </div>
                </div>
            </div>
            <form className="form chatForm" onSubmit={(e) => e.preventDefault()}>
                <div className="answer-container">
                    {chatHistory.map((msg, index) => (
                        <div key={index} className="answer-box">
                            <p className="">
                                <span className="talker">{msg.sender === "user" ?
                                    <svg height="30px" width="30px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" > <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="#000000" d="M364.032,355.035c-3.862-1.446-8.072-3.436-12.35-5.794l-71.57,98.935l-5.09-64.814h-38.033l-5.091,64.814 l-71.569-98.935c-4.408,2.466-8.656,4.487-12.361,5.794c-37.478,13.193-129.549,51.136-123.607,122.21 C25.787,494.301,119.582,512,256.006,512c136.413,0,230.208-17.699,231.634-34.755 C493.583,406.102,401.273,368.961,364.032,355.035z" ></path> <path fill="#000000" d="M171.501,208.271c5.21,29.516,13.966,55.554,25.494,68.38c0,15.382,0,26.604,0,35.587 c0,0.902-0.158,1.852-0.416,2.833l40.41,19.462v28.545h38.033v-28.545l40.39-19.452c-0.258-0.981-0.416-1.932-0.416-2.843 c0-8.983,0-20.205,0-35.587c11.548-12.826,20.304-38.864,25.514-68.38c12.143-4.338,19.096-11.281,27.762-41.658 c9.231-32.358-13.876-31.258-13.876-31.258c18.69-61.873-5.922-120.022-47.124-115.753c-28.426-49.73-123.627,11.36-153.48,7.102 c0,17.055,7.112,29.842,7.112,29.842c-10.379,19.69-6.378,58.951-3.446,78.809c-1.704-0.03-22.602,0.188-13.728,31.258 C152.405,196.99,159.338,203.934,171.501,208.271z" ></path> </g> </svg>
                                    : 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className=""><path d="M12 2C6.486 2 2 6.486 2 12c0 2.521.945 4.82 2.49 6.582 1.24 1.52 3.266 3.066 6.439 3.358a9.731 9.731 0 0 0 2.141 0c3.174-.292 5.199-1.839 6.439-3.358A9.948 9.948 0 0 0 22 12c0-5.514-4.486-10-10-10zM4.709 8.724c.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 .843-.133 1.654-.375 2.417-.261.195-.733.474-1.577.756-.769.256-1.672.458-2.685.602a25.337 25.337 0 0 1-6.727 0c-1.013-.144-1.916-.346-2.685-.602-.844-.282-1.316-.561-1.577-.756a7.953 7.953 0 0 1 .335-5.693z"></path><circle cx="8.5" cy="12.5" r="1.5"></circle><circle cx="15.5" cy="12.5" r="1.5"></circle></svg>
                                    }
                                </span>
                                <span className="question">{msg.text}</span>
                            </p>
                        </div>
                    ))}
                </div>
                <div className="input">
                    <input type="text" placeholder="Enter your question here..." id="buddyInput" ref={inputRef} value={chatMessage}onChange={(e) => setChatMessage(e.target.value)} onKeyDown={handleKeyDown} />
                    <i className="ri-send-plane-2-line"  onClick={handleSendMessage}></i>
                    {/* <button type="button" className="sendButton" onClick={handleSendMessage}>
                    </button> */}
                </div>
            </form>
        </section>
    );
}

export default BuddySection;
