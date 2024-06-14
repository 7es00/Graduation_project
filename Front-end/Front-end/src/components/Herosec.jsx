import React, { useEffect } from "react";
import { useUser } from "./UserContext"; // Import useUser hook from UserContext

import '../styles/home/hero.css'
import '../styles/home/asideBar.css'
import { useDarkMode } from "./DarkModeContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const HeroSection = () => {

  const navigate = useNavigate();

  // handel scroll
  useEffect(() => {
    const handleClick = () => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };
    const mouseElement = document.getElementById('mouse');
    if (mouseElement) {
      mouseElement.addEventListener('click', handleClick);
    }
    return () => {
      if (mouseElement) {
        mouseElement.removeEventListener('click', handleClick);
      }
    };
  }, []);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const logout = () => {
    localStorage.removeItem('loggedin');
    window.location.reload();
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    Swal.fire({
        title: 'Are you sure?',
        text: "Do you want to logout?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'No, stay login'
    }).then((result) => {
        if (result.isConfirmed) {
            logout();
            navigate('/'); // Redirect to the home page or login page after logout
        }
    });
};



  return (



    <section className="heroSection" id="heroSection">
      {/* navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <div className="logo absolute w-100">
            <a href="#heroSection"><img src="https://roadx.site/logo.png" alt="logo" className="img-" /></a>
          </div>
          <div className="">
            <ul className="navbar-nav links absolute flexCenter justify-content-around pt-5">
              <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#heroSection">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg> 
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#stackSection">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"></path></svg> 
                  </a>
              </li>
              {/* <li className="nav-item">
                  <a className="nav-link" href="#knowledgeSection">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h7v14H4zm9 0V5h7l.001 14H13z"></path><path d="M15 7h3v2h-3zm0 4h3v2h-3z"></path></svg> 
                  </a>
              </li> */}
              <li className="nav-item">
                  <a className="nav-link" href="#buddySection">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c0 2.521.945 4.82 2.49 6.582 1.24 1.52 3.266 3.066 6.439 3.358a9.731 9.731 0 0 0 2.141 0c3.174-.292 5.199-1.839 6.439-3.358A9.948 9.948 0 0 0 22 12c0-5.514-4.486-10-10-10zM4.709 8.724c.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 .843-.133 1.654-.375 2.417-.261.195-.733.474-1.577.756-.769.256-1.672.458-2.685.602a25.337 25.337 0 0 1-6.727 0c-1.013-.144-1.916-.346-2.685-.602-.844-.282-1.316-.561-1.577-.756a7.953 7.953 0 0 1 .335-5.693z"></path><circle cx="8.5" cy="12.5" r="1.5"></circle><circle cx="15.5" cy="12.5" r="1.5"></circle></svg> 
                  </a>
              </li>

              <li className="nav-item">
                {!localStorage.getItem("loggedin") ? (
                  <a className="nav-link" href="#form">
                    <svg width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.651 16.989h17.326c0.553 0 1-0.448 1-1s-0.447-1-1-1h-17.264l3.617-3.617c0.391-0.39 0.391-1.024 0-1.414s-1.024-0.39-1.414 0l-5.907 6.062 5.907 6.063c0.196 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293c0.391-0.39 0.391-1.023 0-1.414zM29.989 0h-17c-1.105 0-2 0.895-2 2v9h2.013v-7.78c0-0.668 0.542-1.21 1.21-1.21h14.523c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-14.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.013 0.003v9.030c0 1.105 0.895 2 2 2h16.999c1.105 0 2.001-0.895 2.001-2v-28c-0-1.105-0.896-2-2-2z"></path> </g></svg>
                  </a>
                ) : (
                  <a onClick={handleLogoutClick} className="nav-link" href="#">
                    <svg  width="24px" height="24px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.651 16.989h17.326c0.553 0 1-0.448 1-1s-0.447-1-1-1h-17.264l3.617-3.617c0.391-0.39 0.391-1.024 0-1.414s-1.024-0.39-1.414 0l-5.907 6.062 5.907 6.063c0.196 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293c0.391-0.39 0.391-1.023 0-1.414zM29.989 0h-17c-1.105 0-2 0.895-2 2v9h2.013v-7.78c0-0.668 0.542-1.21 1.21-1.21h14.523c0.669 0 1.21 0.542 1.21 1.21l0.032 25.572c0 0.668-0.541 1.21-1.21 1.21h-14.553c-0.668 0-1.21-0.542-1.21-1.21v-7.824l-2.013 0.003v9.030c0 1.105 0.895 2 2 2h16.999c1.105 0 2.001-0.895 2.001-2v-28c-0-1.105-0.896-2-2-2z"></path> </g></svg>                  
                    </a>
                )}
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#contactSection">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.898 5.515 5 6.934V22l5.34-4.005C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.67 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path><path d="M7 7h10v2H7zm0 4h7v2H7z"></path></svg> 
                  </a>
              </li>
            </ul>
          </div>
          <div className="mods flexCenter absolute modeIcon">
            <span id="lightModeIcon" onClick={toggleDarkMode}>
              <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 13.1448 2.95764 14.2397 3.33685 15.25H12.8489C10.1562 14.1916 8.25 11.5684 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM18.1508 15.25H20.6631C20.9324 14.5327 21.1151 13.7727 21.1985 12.9825C20.4085 13.9854 19.359 14.7751 18.1508 15.25ZM22.2375 15.2884C22.5704 14.2513 22.75 13.1461 22.75 12C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 13.1461 1.4296 14.2513 1.76248 15.2884C1.46468 15.3877 1.25 15.6688 1.25 16C1.25 16.4142 1.58579 16.75 2 16.75H22C22.4142 16.75 22.75 16.4142 22.75 16C22.75 15.6688 22.5353 15.3877 22.2375 15.2884ZM4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19ZM7.25 22C7.25 21.5858 7.58579 21.25 8 21.25H16C16.4142 21.25 16.75 21.5858 16.75 22C16.75 22.4142 16.4142 22.75 16 22.75H8C7.58579 22.75 7.25 22.4142 7.25 22Z" fill="#1C274C"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M20.3655 2.12433C20.0384 1.29189 18.8624 1.29189 18.5353 2.12433L18.1073 3.21354L17.0227 3.6429C16.1933 3.97121 16.1933 5.14713 17.0227 5.47544L18.1073 5.90481L18.5353 6.99401C18.8624 7.82645 20.0384 7.82646 20.3655 6.99402L20.7935 5.90481L21.8781 5.47544C22.7075 5.14714 22.7075 3.97121 21.8781 3.6429L20.7935 3.21354L20.3655 2.12433ZM19.4504 2.52989L19.8651 3.58533C19.9648 3.83891 20.165 4.04027 20.4188 4.14073L21.4759 4.55917L20.4188 4.97762C20.165 5.07808 19.9648 5.27943 19.8651 5.53301L19.4504 6.58846L19.0357 5.53301C18.936 5.27943 18.7358 5.07808 18.482 4.97762L17.4249 4.55917L18.482 4.14073C18.7358 4.04027 18.936 3.83891 19.0357 3.58533L19.4504 2.52989ZM16.4981 7.94681C16.171 7.11437 14.9951 7.11437 14.668 7.94681L14.5134 8.34008L14.1222 8.49497C13.2928 8.82328 13.2928 9.9992 14.1222 10.3275L14.5134 10.4824L14.668 10.8757C14.9951 11.7081 16.171 11.7081 16.4981 10.8757L16.6527 10.4824L17.0439 10.3275C17.8733 9.9992 17.8733 8.82328 17.0439 8.49497L16.6527 8.34008L16.4981 7.94681ZM15.583 8.35237L15.7243 8.71188C15.824 8.96545 16.0242 9.16681 16.278 9.26727L16.6417 9.41124L16.278 9.55521C16.0242 9.65567 15.824 9.85703 15.7243 10.1106L15.583 10.4701L15.4418 10.1106C15.3421 9.85703 15.1419 9.65567 14.8881 9.55521L14.5244 9.41124L14.8881 9.26727C15.1419 9.16681 15.3421 8.96545 15.4418 8.71188L15.583 8.35237Z" fill="#1C274C"></path>
                </g>
              </svg>
            </span>
            <span id="darkModeIcon" onClick={toggleDarkMode}>
              <svg
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="35px"
              height="35px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
              fill="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#fff"
                    d="M32,14.002c-9.941,0-18,8.059-18,18s8.059,18,18,18 s18-8.059,18-18S41.941,14.002,32,14.002z M32,48.002c-8.837,0-16-7.164-16-16s7.163-16,16-16s16,7.164,16,16 S40.837,48.002,32,48.002z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M32,20.002c-0.553,0-1,0.447-1,1s0.447,1,1,1 c5.522,0,10,4.477,10,10c0,0.553,0.447,1,1,1s1-0.447,1-1C44,25.375,38.627,20.002,32,20.002z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M63,31H53c-0.553,0-1,0.447-1,1s0.447,1,1,1h10 c0.553,0,1-0.447,1-1S63.553,31,63,31z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M11.457,36.47l-3.863,1.035c-0.534,0.144-0.851,0.692-0.707,1.226 c0.143,0.533,0.69,0.85,1.225,0.706l3.863-1.035c0.533-0.143,0.85-0.69,0.707-1.225C12.539,36.644,11.99,36.327,11.457,36.47z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M49.32,22c0.277,0.479,0.888,0.643,1.367,0.366l8.66-5 c0.479-0.276,0.643-0.888,0.365-1.366c-0.275-0.479-0.887-0.642-1.365-0.365l-8.66,5C49.208,20.912,49.045,21.521,49.32,22z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M17.858,46.143c-0.39-0.391-1.023-0.389-1.414,0l-2.828,2.828 c-0.391,0.391-0.39,1.025,0.001,1.415c0.39,0.391,1.022,0.39,1.413-0.001l2.828-2.828C18.249,47.168,18.249,46.534,17.858,46.143z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M42,14.68c0.479,0.276,1.09,0.113,1.367-0.366l5-8.66 C48.644,5.175,48.48,4.563,48,4.287c-0.478-0.276-1.088-0.112-1.365,0.366l-4.999,8.661C41.358,13.793,41.522,14.403,42,14.68z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M26.824,51.318c-0.532-0.143-1.08,0.176-1.225,0.707l-1.035,3.863 c-0.143,0.535,0.176,1.083,0.709,1.226c0.533,0.144,1.08-0.173,1.223-0.708l1.035-3.863C27.676,52.012,27.359,51.463,26.824,51.318 z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M32,12c0.554,0,1.001-0.446,1.002-1V1c0-0.553-0.447-1-1.002-1 c-0.551,0-0.998,0.447-0.999,1l0.001,10C31.002,11.553,31.449,12,32,12z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M38.402,52.025c-0.141-0.532-0.689-0.85-1.225-0.707 c-0.533,0.143-0.848,0.692-0.707,1.225l1.035,3.863c0.144,0.535,0.693,0.85,1.227,0.707s0.849-0.689,0.705-1.225L38.402,52.025z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M20.637,14.312c0.275,0.479,0.887,0.643,1.363,0.367 c0.48-0.277,0.645-0.887,0.368-1.367l-5-8.66C17.092,4.174,16.48,4.01,16,4.287c-0.477,0.275-0.641,0.887-0.365,1.365 L20.637,14.312z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M47.558,46.142c-0.388-0.39-1.022-0.39-1.414,0 c-0.391,0.39-0.388,1.024,0,1.414l2.828,2.828c0.392,0.392,1.025,0.389,1.415-0.001c0.391-0.39,0.391-1.021-0.001-1.413 L47.558,46.142z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M4.654,17.365l8.662,4.999c0.477,0.276,1.088,0.113,1.363-0.364 c0.277-0.479,0.115-1.09-0.364-1.367l-8.661-5C5.176,15.356,4.564,15.52,4.287,16C4.013,16.477,4.176,17.089,4.654,17.365z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="fff"
                    d="M52.027,38.4l3.863,1.035c0.535,0.145,1.082-0.176,1.225-0.709 c0.144-0.532-0.172-1.079-0.707-1.223l-3.863-1.035c-0.531-0.145-1.081,0.173-1.225,0.707C51.176,37.709,51.496,38.256,52.027,38.4 z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M12,32c0.001-0.554-0.445-1-0.998-1.002L1,31 c-0.552,0-1,0.445-1,1c0.001,0.551,0.448,1,1.001,1l10.001-0.002C11.553,32.998,12.001,32.552,12,32z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M52.545,27.529l3.863-1.035c0.535-0.143,0.85-0.693,0.706-1.227 c-0.142-0.531-0.688-0.848-1.224-0.705l-3.863,1.035c-0.533,0.141-0.85,0.691-0.707,1.225 C51.461,27.356,52.012,27.67,52.545,27.529z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M14.68,42c-0.275-0.48-0.886-0.644-1.365-0.368l-8.661,5.002 C4.176,46.91,4.01,47.52,4.287,48c0.277,0.477,0.889,0.641,1.367,0.365l8.66-5.002C14.791,43.088,14.957,42.479,14.68,42z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M46.144,17.856c0.389,0.392,1.022,0.388,1.414,0l2.828-2.828 c0.392-0.392,0.39-1.024-0.002-1.415c-0.388-0.39-1.021-0.391-1.412,0.001l-2.828,2.828C45.752,16.83,45.754,17.466,46.144,17.856z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M22,49.32c-0.479-0.277-1.088-0.113-1.365,0.364l-5,8.663 c-0.275,0.478-0.115,1.088,0.365,1.365c0.479,0.274,1.09,0.11,1.367-0.367l4.998-8.662C22.641,50.207,22.48,49.597,22,49.32z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M37.178,12.68c0.531,0.145,1.078-0.176,1.225-0.707l1.035-3.863 c0.143-0.535-0.176-1.083-0.709-1.225c-0.531-0.144-1.08,0.172-1.223,0.707l-1.035,3.863C36.324,11.986,36.645,12.536,37.178,12.68 z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M32,52c-0.553-0.002-0.998,0.446-1,0.998l0.002,10.004 C31.002,63.552,31.445,64,32,64c0.553,0,1-0.449,1.001-1l-0.003-10.002C32.998,52.447,32.555,52,32,52z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M25.6,11.973c0.139,0.533,0.691,0.85,1.225,0.707 c0.532-0.141,0.846-0.691,0.707-1.225l-1.035-3.863c-0.145-0.535-0.693-0.851-1.227-0.706c-0.531,0.142-0.85,0.688-0.705,1.224 L25.6,11.973z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M43.363,49.687c-0.275-0.478-0.883-0.644-1.363-0.365 c-0.479,0.274-0.641,0.885-0.367,1.364l5.004,8.661c0.275,0.478,0.883,0.644,1.363,0.366c0.479-0.277,0.642-0.889,0.367-1.367 L43.363,49.687z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M16.443,17.856c0.387,0.394,1.023,0.39,1.414,0 c0.391-0.388,0.387-1.021,0-1.414l-2.828-2.828c-0.393-0.392-1.025-0.39-1.415,0.002c-0.39,0.388-0.392,1.021,0.001,1.412 L16.443,17.856z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M59.348,46.633l-8.663-4.997 c-0.478-0.276-1.087-0.116-1.363,0.366c-0.278,0.477-0.112,1.086,0.364,1.364l8.664,4.999c0.477,0.275,1.086,0.115,1.363-0.365 C59.988,47.521,59.824,46.91,59.348,46.633z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="fff"
                      d="M11.974,25.599L8.11,24.563c-0.536-0.144-1.083,0.175-1.225,0.708 c-0.144,0.531,0.171,1.08,0.707,1.225l3.863,1.034c0.531,0.146,1.081-0.175,1.225-0.707C12.825,26.293,12.505,25.746,11.974,25.599 z"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
          </div>
        </div>
      </nav>
      {/* end navbar */}

      {/* main */}
      <main>  
        <div className="left">
              <div className="leftContent">
                  <div className="text">
                      <span>
                          <h1>
                              <span className="borderedText">Hello</span>
                              <span className="coloredText ms-3">There</span>
                          </h1>
                      </span>
                      <h3>
                          <span className="coloredText">Buddy</span>
                          <span className="borderedText ms-4">Is Here</span>
                      </h3>
                      <p>
                          I am here to provide to you a clear and organized path for learning,
                          <br />
                          Save time and effort instead of random research and experimentation.
                      </p>
                      <div className="media-box ">
                          <div className="main">
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                  <svg
                                    className="instagram"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 256 256"
                                    width="30px"
                                    height="30px"
                                    fillRule="nonzero"
                                  >
                                    <g
                                        fillRule="nonzero"
                                        stroke="none"
                                        strokeWidth="1"
                                        strokeLinecap="butt"
                                        strokeLinejoin="miter"
                                        strokeMiterlimit="10"
                                        strokeDasharray=""
                                        strokeDashoffset="0"
                                        fontFamily="none"
                                        fontWeight="none"
                                        fontSize="none"
                                        textAnchor="none"
                                        style={{ mixBlendMode: 'normal' }}
                                    >
                                        <g transform="scale(8,8)">
                                            <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                                        </g>
                                    </g>
                                </svg>
                                  </a>
                              </div>
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                  <svg className="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
                                  </a>
                              </div>
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                    <svg
                version="1.1"
                className="dribble"
                id="Icons"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                width="30px"
                height="30px"
                fill="#000000"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <style type="text/css">
                        {`
                            .st0{fill:#FFFFFF;}
                            .st1{fill:#3A559F;}
                            .st2{fill:#F4F4F4;}
                            .st3{fill:#FF0084;}
                            .st4{fill:#0063DB;}
                            .st5{fill:#00ACED;}
                            .st6{fill:#FFEC06;}
                            .st7{fill:#FF0000;}
                            .st8{fill:#25D366;}
                            .st9{fill:#0088FF;}
                            .st10{fill:#314358;}
                            .st11{fill:#EE6996;}
                            .st12{fill:#01AEF3;}
                            .st13{fill:#FFFEFF;}
                            .st14{fill:#F06A35;}
                            .st15{fill:#00ADEF;}
                            .st16{fill:#1769FF;}
                            .st17{fill:#1AB7EA;}
                            .st18{fill:#6001D1;}
                            .st19{fill:#E41214;}
                            .st20{fill:#05CE78;}
                            .st21{fill:#7B519C;}
                            .st22{fill:#FF4500;}
                            .st23{fill:#00F076;}
                            .st24{fill:#FFC900;}
                            .st25{fill:#00D6FF;}
                            .st26{fill:#FF3A44;}
                            .st27{fill:#FF6A36;}
                            .st28{fill:#0061FE;}
                            .st29{fill:#F7981C;}
                            .st30{fill:#EE1B22;}
                            .st31{fill:#EF3561;}
                            .st32{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-miterlimit:10;}
                            .st33{fill:#0097D3;}
                            .st34{fill:#01308A;}
                            .st35{fill:#019CDE;}
                            .st36{fill:#FFD049;}
                            .st37{fill:#16A05D;}
                            .st38{fill:#4486F4;}
                            .st39{fill:none;}
                            .st40{fill:#34A853;}
                            .st41{fill:#4285F4;}
                            .st42{fill:#FBBC05;}
                            .st43{fill:#EA4335;}
                        `}
                    </style>
                    <path
                        className="st8"
                        d="M17,0C8.7,0,2,6.7,2,15c0,3.4,1.1,6.6,3.2,9.2l-2.1,6.4c-0.1,0.4,0,0.8,0.3,1.1C3.5,31.9,3.8,32,4,32 c0.1,0,0.3,0,0.4-0.1l6.9-3.1C13.1,29.6,15,30,17,30c8.3,0,15-6.7,15-15S25.3,0,17,0z"
                    ></path>
                    <path
                        className="st0"
                        d="M25.7,20.5c-0.4,1.2-1.9,2.2-3.2,2.4C22.2,23,21.9,23,21.5,23c-0.8,0-2-0.2-4.1-1.1c-2.4-1-4.8-3.1-6.7-5.8 L10.7,16C10.1,15.1,9,13.4,9,11.6c0-2.2,1.1-3.3,1.5-3.8c0.5-0.5,1.2-0.8,2-0.8c0.2,0,0.3,0,0.5,0c0.7,0,1.2,0.2,1.7,1.2l0.4,0.8 c0.3,0.8,0.7,1.7,0.8,1.8c0.3,0.6,0.3,1.1,0,1.6c-0.1,0.3-0.3,0.5-0.5,0.7c-0.1,0.2-0.2,0.3-0.3,0.3c-0.1,0.1-0.1,0.1-0.2,0.2 c0.3,0.5,0.9,1.4,1.7,2.1c1.2,1.1,2.1,1.4,2.6,1.6l0,0c0.2-0.2,0.4-0.6,0.7-0.9l0.1-0.2c0.5-0.7,1.3-0.9,2.1-0.6 c0.4,0.2,2.6,1.2,2.6,1.2l0.2,0.1c0.3,0.2,0.7,0.3,0.9,0.7C26.2,18.5,25.9,19.8,25.7,20.5z"
                    ></path>
                </g>
                                    </svg>
                                  </a>
                              </div>
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                  <svg className="codepen"  width="30px" height="30px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z" fill-rule="evenodd"></path> </g></svg>
                  
                                  </a>
                              </div>
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                  <svg className="uiverse " xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c0 2.521.945 4.82 2.49 6.582 1.24 1.52 3.266 3.066 6.439 3.358a9.731 9.731 0 0 0 2.141 0c3.174-.292 5.199-1.839 6.439-3.358A9.948 9.948 0 0 0 22 12c0-5.514-4.486-10-10-10zM4.709 8.724c.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 .843-.133 1.654-.375 2.417-.261.195-.733.474-1.577.756-.769.256-1.672.458-2.685.602a25.337 25.337 0 0 1-6.727 0c-1.013-.144-1.916-.346-2.685-.602-.844-.282-1.316-.561-1.577-.756a7.953 7.953 0 0 1 .335-5.693z"></path><circle cx="8.5" cy="12.5" r="1.5"></circle><circle cx="15.5" cy="12.5" r="1.5"></circle></svg>

                                  </a>
                              </div>
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                    <svg className="discord" height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path></svg>
                                    
                                  </a>
                              </div>
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                  <svg className="github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
                                    
                                  </a>
                              </div>
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                  <svg className="telegram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px"><path d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"></path><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"></path><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"></path></svg>
                                    
                                  </a>
                              </div>
                              <div className="card">
                                  <a href="https://www.facebook.com/share/6xWUjXPk9DxiiKnx/?mibextid=qi2Omg">
                                  <svg className="reddit" width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 18.0044C16.226 18.1372 19.3568 15.23 19.5 11.5044C19.3568 7.77878 16.226 4.87154 12.5 5.00438C8.77403 4.87154 5.64315 7.77878 5.5 11.5044C5.51666 13.4739 6.45114 15.3229 8.027 16.5044L8 19.5044L11 17.8544C11.4937 17.9543 11.9962 18.0046 12.5 18.0044Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16 10.0044L13.5 12.5044L11.5 10.5044L9 13.0044" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                              
                                  </a>
                              </div>
                              <p className="text">HOVER <br /><br /> FOR <br /><br /> SOCIAL </p>
                              <div className="main_back"></div>
                          </div>
                      </div>
                      <div className="mouse" id="mouse">
                        <svg
                            width="60px"
                            height="60px"
                            viewBox="0 0 1024.00 1024.00"
                            className="icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#000000"
                            strokeWidth="0.01024"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="2.048"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M760.32 504.32l-496.64 0.512v188.928c0 115.712 94.208 209.92 209.92 209.92h76.8c115.712 0 209.92-94.208 209.92-209.92v-189.44z m15.36 189.44c0 124.416-100.864 225.28-225.28 225.28h-76.8c-124.416 0-225.28-100.864-225.28-225.28V489.472l527.36-0.512v204.8z"
                                    fill=""
                                ></path>
                                <path
                                    d="M491.52 291.84h40.96c14.336 0 25.6 11.264 25.6 25.6v51.2c0 14.336-11.264 25.6-25.6 25.6h-40.96c-14.336 0-25.6-11.264-25.6-25.6V317.44c0-14.336 11.264-25.6 25.6-25.6z"
                                    fill="#0088f0"
                                ></path>
                                <path
                                    d="M488.96 192v76.8H465.92c-9.728 0-17.92 8.192-17.92 17.92v112.64c0 9.728 8.192 17.92 17.92 17.92h23.04v53.248h-240.64V417.28c0-124.416 100.864-225.28 225.28-225.28h15.36z m-225.28 225.28v37.888h209.92v-22.528H465.92c-18.432 0-33.28-14.848-33.28-33.28V286.72c0-18.432 14.848-33.28 33.28-33.28h7.68v-46.08c-115.712 0-209.92 94.208-209.92 209.92z m286.72-163.84h7.68c18.432 0 33.28 14.848 33.28 33.28v112.64c0 18.432-14.848 33.28-33.28 33.28h-7.68v22.528h209.92v-37.888c0-115.712-94.208-209.92-209.92-209.92v46.08z m0-61.44c124.416 0 225.28 100.864 225.28 225.28v53.248h-240.64V417.28h23.04c9.728 0 17.92-8.192 17.92-17.92V286.72c0-9.728-8.192-17.92-17.92-17.92h-23.04v-76.8h15.36z"
                                    fill=""
                                ></path>
                                <path
                                    d="M491.52 299.52c-9.728 0-17.92 8.192-17.92 17.92v51.2c0 9.728 8.192 17.92 17.92 17.92h40.96c9.728 0 17.92-8.192 17.92-17.92V317.44c0-9.728-8.192-17.92-17.92-17.92h-40.96z m0-15.36h40.96c18.432 0 33.28 14.848 33.28 33.28v51.2c0 18.432-14.848 33.28-33.28 33.28h-40.96c-18.432 0-33.28-14.848-33.28-33.28V317.44c0-18.432 14.848-33.28 33.28-33.28z"
                                    fill=""
                                ></path>
                                <path
                                    d="M391.68 79.36c0 24.064 9.728 42.496 28.672 54.272 7.68 4.608 15.36 7.68 24.576 10.24 5.12 1.536 8.192 2.048 17.92 3.584 13.312 2.56 18.432 4.096 22.528 7.168 12.288 9.216 16.384 19.968 13.824 34.816-1.536 8.192 4.096 16.384 12.8 17.92 8.192 1.536 16.384-4.096 17.92-12.8 4.096-26.112-4.608-48.128-25.6-64.512-9.216-7.168-17.92-9.728-35.84-12.8-8.704-1.536-11.264-2.048-15.36-3.072-6.656-1.536-11.776-3.584-15.872-6.656-9.216-5.632-13.824-14.848-13.824-28.672 0-8.704-7.168-15.36-15.36-15.36-9.728 0.512-16.384 7.68-16.384 15.872z"
                                    fill="#0088f0"
                                ></path>
                            </g>
                        </svg>
                      </div>
                  </div>
              </div>
        </div>
        <div className="right">
          <div className="layout flexCenter absolute">
            <div className="services flexCenter">
              <h3>resources collector</h3>
            </div>
            <div className="services flexCenter">
              <h3>common programs</h3>
            </div>
            <div className="services flexCenter">
              <h3>Assistant chatbot</h3>
            </div>
            <div className="services flexCenter">
              <h3>free certifications </h3>
            </div>
            <div className="circle"></div>
          </div>
          <div className="overlay absolute"></div>
        </div>
      </main>
      {/* end main */}
    </section>
  );
};

export default HeroSection;
