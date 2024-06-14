import React, { useState } from "react";
import Swal from 'sweetalert2';

const apiUrl = process.env.REACT_APP_API_URL;

const SignUp = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    };

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };

    // Sign Up
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [confirmedPass, setConfirmedPass] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if password and confirm password are equal
        if (formData.password !== confirmedPass) {
            Swal.fire({
                position: "top-end",
                icon: 'error',
                title: 'Passwords do not match',
                text: 'Please make sure your password and confirm password are the same.',
                customClass: {
                    popup: 'swal2-popup'
                }
            });
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Sign up successful", data);
                localStorage.setItem("userId", data.user.id);
                localStorage.setItem("token", data.token);
                localStorage.setItem("loggedin", true);
                Swal.fire({
                    position: "top-end",
                    icon: 'success',
                    title: 'Sign up successful',
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'swal2-popup'
                    }
                });
                window.location.reload();
            } else {
                const message = await response.text();
                console.error("Sign up failed", message);
                Swal.fire({
                    position: "top-end",
                    icon: 'error',
                    title: 'Sign up failed',
                    text: message,
                    customClass: {
                        popup: 'swal2-popup'
                    }
                });
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                position: "top-end",
                icon: 'error',
                title: 'Sign up error',
                text: error.message,
                customClass: {
                    popup: 'swal2-popup'
                }
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flexCenter">
                <h1 className="sign_header">Sign Up</h1>
                <div className="input">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="name" className="label">
                        Enter your name
                    </label>
                    <div className="icon">
                        <ion-icon name="person-outline" />
                    </div>
                </div>
                <div className="input">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Enter your email</label>
                    <div className="icon">
                        <ion-icon name="mail-outline" />
                    </div>
                </div>
                <div className="input">
                    <input
                        type={showPassword1 ? "text" : "password"}
                        id="password"
                        className="passwordField passwordField1"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="password">Enter your password</label>
                    <div className="icon">
                        <ion-icon name="shield-outline" />
                    </div>
                    <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='eye eye1'
                    onClick={togglePasswordVisibility1}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {showPassword1 ? (
                        <path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> </path>  
                        ) 
                        : 
                        (
                        <path d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        )}
                    </g>
                </svg>
                </div>
                <div className="input">
                    <input
                        type={showPassword2 ? "text" : "password"}
                        id="confirm_password"
                        className="passwordField confirm_password"
                        name="confirm_password"
                        value={confirmedPass}
                        onChange={(e) => setConfirmedPass(e.target.value)}
                        required
                    />
                    <label htmlFor="confirm_password">
                        Confirm your password
                    </label>
                    <div className="icon">
                        <ion-icon name="shield-checkmark-outline" />
                    </div>
                    <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="eye confirm_eye1"
                onClick={togglePasswordVisibility2} >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {showPassword2 ? (
                        
                        <path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 

                    ) : (
                        <path
                            d="M3 14C3 9.02944 7.02944 5 12 5C16.9706 5 21 9.02944 21 14M17 14C17 16.7614 14.7614 19 12 19C9.23858 19 7 16.7614 7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14Z"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    )}
                </g>
                </svg>
                </div>
                <input
                    type="submit"
                    value="Sign Up"
                    className="submit"
                />
            </form>
        </>
    );
};

export default SignUp;
