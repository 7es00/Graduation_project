import React from 'react';
import { Link } from 'react-router-dom';

function KnowledgeSection() {
  return (
    <section id="knowledge">
      <div className="stacks">
        <div className="heading">
          <div className="stacksHeading">knowledge</div>
          <div className="stacksDetails">we recommend for you this stacks</div>
        </div>
        <div className="stacksContent">
          <div className="tracks">
            <div className="stackName">
              <i className="ri-braces-line"></i> Web development
            </div>
            <div className="trackContent">
              <div className="track">
                <div className="trackIcon"><i className="ri-code-s-slash-line"></i></div>
                <div className="trackName"><Link to="/front" target="_blank" rel="noopener noreferrer">Frontend</Link></div>
              </div>
              <div className="track">
                <div className="trackIcon"><i className="ri-parentheses-fill"></i></div>
                <div className="trackName"><a href="/">Backend</a></div>
              </div>
              <div className="track">
                <div className="trackIcon"><i className="ri-wordpress-fill"></i></div>
                <div className="trackName"><a href="/">wordPress</a></div>
              </div>
            </div>
          </div>
          <div className="tracks">
            <div className="stackName">
              <i className="ri-smartphone-line"></i> Application development
            </div>
            <div className="trackContent">
              <div className="track">
                <div className="trackIcon"><i className="ri-android-line"></i></div>
                <div className="trackName"><a href="/">android</a></div>
              </div>
              <div className="track">
                <div className="trackIcon"><i className="ri-flutter-line"></i></div>
                <div className="trackName"><a href="/">Flutter</a></div>
              </div>
            </div>
          </div>
          <div className="tracks">
            <div className="stackName">
              <i className="ri-stackshare-line"></i> Network
            </div>
            <div className="trackContent">
              <div className="track">
                <div className="trackIcon"><i className="ri-code-s-slash-line"></i></div>
                <div className="trackName"><a href="/">network</a></div>
              </div>
              <div className="track">
                <div className="trackIcon"><i className="ri-wordpress-fill"></i></div>
                <div className="trackName"><a href="/">cyber security</a></div>
              </div>
            </div>
          </div>
          <div className="tracks">
            <div className="stackName">
              <i className="ri-robot-2-line"></i> Artificial Intelligence and Design
            </div>
            <div className="trackContent">
              <div className="track">
                <div className="trackIcon"><i className="ri-robot-fill"></i></div>
                <div className="trackName"><a href="/">AI</a></div>
              </div>
              <div className="track">
                <div className="trackIcon"><i className="ri-brush-line"></i></div>
                <div className="trackName"><a href="/">ui/ux </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowledgeSection;
