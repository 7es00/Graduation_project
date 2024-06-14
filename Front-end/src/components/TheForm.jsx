import React, { useState } from 'react';
import adventure from "../assests/imgs/undraw_adventure_map_hnin.svg";
import navigator from "../assests/imgs/undraw_navigator_a479.svg";
import "../styles/home/form.css"

import SignUp from './Signup';
import SignIn from './Signin';


const FormSection = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleFormMode = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <section id="formSection" className="formSection pt-5">
            <div className="container-xl mx-auto px-2">
                <div className="signForm" id="form">
                    <div className={`form_sec ${isSignUp ? 'sign_up_mod' : 'sign_in_mod'}`}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="sign_up">
                                    {isSignUp && <SignUp />}
                                    <div className="panel left_panel ">
                                        <h1>Do you want to join us?</h1>
                                        <p> if you didt get your account yet you can do for free from here this will help you to get the access for our test either this will help you to send to us your feedback </p>
                                        <img src={adventure} alt="" />
                                        <button id="sigInMod" className="panel_btns" onClick={toggleFormMode}>
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="sign_in">
                                    {!isSignUp && <SignIn />}
                                    <div className="panel right_panel">
                                        <h1>Already one of us?</h1>
                                        <p>if you one of our family you can login from here to continue you journey and finish  it up , also this will help you to get our test to check your level</p>
                                        <img src={navigator} alt="" />
                                        <button id="sigUpMod" className="panel_btns" onClick={toggleFormMode}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormSection;



