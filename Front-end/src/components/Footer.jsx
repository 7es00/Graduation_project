import React, { useEffect } from 'react';
import "../styles/home/footer.css"

const Footer = () => {


  // back to top button 
  useEffect(() => {
    const backToTopButton = document.getElementById('backToTop');
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    backToTopButton.addEventListener('click', handleScrollToTop);

    // Cleanup event listener on component unmount
    return () => {
      backToTopButton.removeEventListener('click', handleScrollToTop);
    };
  }, []);


  return (
    <footer className="text-center text-lg-start text-white footerSection pt-4" style={{ backgroundColor: '#1c2331' }}>
      <div className="container-fluid text-center text-md-start w-100 px-0">
        <div className="row mt-3 px-3">
          <div className="col-md-3 mx-auto mb-4 text-center">
            <h6 className="text-uppercase fw-bold">about us</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p className='p-5 p-md-0'>
              We are a student team from the Egyptian e-learning university, we are building this project because we believe that the best way to succeed is to help the other achieve his goals.
            </p>
            <h6 className="text-uppercase fw-bold mt-4">Contact us</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p><i className="ri-map-2-line fs-4"></i> Assuitt University, EELU</p>
            <p className="mt-2"><i className="ri-mail-send-line fs-4"></i> roadx2024@gmail.com</p>
            <p className="mt-2"><i className="ri-smartphone-line fs-4"></i> + 01 234 567 88</p>
            <p className="mt-2"><i className="ri-smartphone-line fs-4"></i> + 01 234 567 89</p>
          </div>
          <div className="col-md-2 mx-auto mb-4 text-center">
            <h6 className="text-uppercase fw-bold">Tracks</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p className="mt-0">
              <a href="https://roadx.site/stacks/1" className="text-white">Front-End</a>
            </p>
            <p className="mt-3">
              <a href="https://roadx.site/stacks/2" className="text-white">Back-End</a>
            </p>
            <p className="mt-3">
              <a href="https://roadx.site/stacks/7" className="text-white">Network</a>
            </p>
            <p className="mt-3">
              <a href="https://roadx.site/stacks/3" className="text-white">WordPress</a>
            </p>
          </div>
          <div className="col-md-2 mx-auto mb-4 text-center">
            <h6 className="text-uppercase fw-bold">frameworks</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p className="mt-0">
              <a href="https://roadx.site/technologies/37" className="text-white">Python</a>
            </p>
            <p className="mt-3">
              <a href="https://roadx.site/technologies/13" className="text-white">React JS</a>
            </p>
            <p className="mt-3">
              <a href="http://roadx.site/stacks/8" className="text-white">Cyber Security</a>
            </p>
            <p className="mt-3">
              <a href="https://roadx.site/stacks/6" className="text-white">Flutter</a>
            </p>
          </div>
          <div className="col-md-5 mx-auto mb-md-0 mb-4 text-center">
            <h6 className="text-uppercase fw-bold text-center">Social Media</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <div className="media-box">
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
            <button className="button" id="backToTop">
              <svg className="svgIcon" viewBox="0 0 384 512">
                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center p-3 Copyright">
        © 2024 Copyright: <a className="text-white" href="https://roadx.site">RoadX Team</a>
      </div>
    </footer>
  );
};

export default Footer;
