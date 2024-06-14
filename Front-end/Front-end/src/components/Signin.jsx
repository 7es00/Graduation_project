import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useUser } from './UserContext'; // Import useUser hook from UserContext

const apiUrl = process.env.REACT_APP_API_URL;

const SignIn = () => {
    const { loginUser } = useUser();
    const [showPassword, setShowPassword] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChangeLog = (e) => {
        const { name, value } = e.target;
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const logHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${apiUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginFormData)
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful', data);
                loginUser(data.user.id, data.token);  // Use loginUser from context
                Swal.fire({
                    position: "top-end",
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'swal2-popup'
                    }
                }).then(() => {
                    window.location.reload();
                });
            } else {
                console.error('Login failed', data.message);
                Swal.fire({
                    position: "top-end",
                    icon: 'error',
                    title: 'Login failed',
                    text: data.message,
                    customClass: {
                        popup: 'swal2-popup'
                    }
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                position: "top-end",
                icon: 'error',
                title: 'Login error',
                text: error.message,
                customClass: {
                    popup: 'swal2-popup'
                }
            });
        }
    };

    return (
        <form onSubmit={logHandleSubmit} className="flexCenter">
            <h1 className="sign_header">Log In</h1>
            <div className="input">
                <input
                    type="email"
                    id="email2"
                    name="email"
                    value={loginFormData.email}
                    onChange={handleChangeLog}
                    required
                />
                <label htmlFor="email2">Enter your email</label>
                <div className="icon">
                    <ion-icon name="mail-outline" />
                </div>
            </div>
            <div className="input">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password2"
                    className="passwordField passwordField2"
                    name="password"
                    value={loginFormData.password}
                    onChange={handleChangeLog}
                    required
                />
                <label htmlFor="password2">Enter your password</label>
                <div className="icon">
                    <ion-icon name="shield-outline" />
                </div>
                <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='eye eye2'
                    onClick={togglePasswordVisibility}
                >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        {showPassword ? (
                            <path d="M9.60997 9.60714C8.05503 10.4549 7 12.1043 7 14C7 16.7614 9.23858 19 12 19C13.8966 19 15.5466 17.944 16.3941 16.3878M21 14C21 9.02944 16.9706 5 12 5C11.5582 5 11.1238 5.03184 10.699 5.09334M3 14C3 11.0069 4.46104 8.35513 6.70883 6.71886M3 3L21 21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> </path>
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
            <input type="submit" value="Log In" className="submit" />
            <div className="reset">
                <p>Forgot your password? <a href="#">Reset your password</a></p>
            </div>
        </form>
    );
};

export default SignIn;
