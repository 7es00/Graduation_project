import React, { useEffect } from "react";
import "../styles/stack/templates.css"

const Templates = ({ templatesData }) => {
  useEffect(() => {
    // Cleanup logic if needed
  }, []);

  return (
    <div className="container-fluid py-5">
      <div className="row">
        <div className="col-12">
          <div className="Templates">
            <div className={`head centerElement fs-1 fs-md-4 mb-md-3 mb-lg-2 coloredText fs-1 sectionHead`}>
              Templates
            </div>
            <div className="TemplateContent container">
              <div className="templateHeader rounded-4">
                <div className="row p-3 my-5">
                  <ul className="nav nav-pills flexCenter" id="pills-tab" role="tablist">
                    {templatesData.map((template, index) => (
                      <li className="nav-item" role="presentation" key={template.id}>
                        <button
                          className={`nav-link px-4 my-2 text-capitalize ${index === 0 ? "active" : ""}`}
                          id={`pills-${template.id}-tab`}
                          data-bs-toggle="pill"
                          data-bs-target={`#pills-${template.id}`}
                          type="button"
                          role="tab"
                          aria-controls={`pills-${template.id}`}
                          aria-selected={index === 0 ? "true" : "false"}
                        >
                          {template.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="templateImgs d-flex flex-wrap p-0">
                  <div className="tab-content" id="pills-tabContent">
                    {templatesData.map((template, index) => (
                      <div
                        className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
                        id={`pills-${template.id}`}
                        role="tabpanel"
                        aria-labelledby={`pills-${template.id}-tab`}
                        tabIndex="0"
                        key={template.id}
                      >
                        <div className="row">
                          {template.image.split("|").map((image, idx) => (
                            <div className="col-lg-6 col-sm-12 p-0" key={idx}>
                              <img
                                src={image}
                                className="mix img-fluid h-100"
                                alt="template img"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
