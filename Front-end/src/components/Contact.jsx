import React from 'react';

import '../styles/home/contact.css'


const ContactSection = () => {
    return (
        <section id="contactSection" className="contactSection py-5">
            <div className="container-lg contact-form">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-image">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                <path d="M255.4 48.2c.2-.1 .4-.2 .6-.2s.4 .1 .6 .2L460.6 194c2.1 1.5 3.4 3.9 3.4 6.5v13.6L291.5 355.7c-20.7 17-50.4 17-71.1 0L48 214.1V200.5c0-2.6 1.2-5 3.4-6.5L255.4 48.2zM48 276.2L190 392.8c38.4 31.5 93.7 31.5 132 0L464 276.2V456c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V276.2zM256 0c-10.2 0-20.2 3.2-28.5 9.1L23.5 154.9C8.7 165.4 0 182.4 0 200.5V456c0 30.9 25.1 56 56 56H456c30.9 0 56-25.1 56-56V200.5c0-18.1-8.7-35.1-23.4-45.6L284.5 9.1C276.2 3.2 266.2 0 256 0z"/>
                            </svg>
                        </div>
                        <form method="POST" action="https://formsubmit.co/roadx2024@gmail.com" className="contactForm">
                            <div className="heading pb-5">
                                <p className="sectionHead coloredText text-center">Drop Us a Message</p>
                            </div>
                            <div className="row w-100">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                    <input type="text" name="txtName" className="py-3 form-control" placeholder="Your Name *" />
                                    </div>
                                    <div className="form-group pt-3">
                                    <input type="email" name="txtEmail" className="py-3 form-control" placeholder="Your Email *" />
                                    </div>
                                    <div className="form-group pt-3">
                                    <input type="text" name="txtSubject" className="py-3 form-control" placeholder="Your Subject *" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                    <textarea name="txtMsg" className="py-3 form-control mt-3 mt-lg-0 message-box" placeholder="Your Message *" style={{ width: "100%", height: "210px" }}></textarea>
                                    </div>
                                </div>
                                <div className="form-group pt-3">
                                    <input type="submit" name="btnSubmit" className="btnContact" value="Send Message" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
