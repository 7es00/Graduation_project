import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../styles/home/stacks.css'

const apiUrl = process.env.REACT_APP_API_URL;

const StacksSection = ({ stacks }) => {
  const [firstLevelCategories, setFirstLevelCategories] = useState([]);

  // fetch data from api 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/stacks`);
        if (response.ok) {
          const data = await response.json();
          setFirstLevelCategories(data);
          console.log(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    firstLevelCategories && firstLevelCategories.map((firstLevelCategory, index) => (
      <section id="stackSection" class="stackSection pt-5 " >
        <div class="stacks ">

          {/* header */}
          <div class="heading pb-5">
            <p class="sectionHead coloredText">{firstLevelCategory.name}</p>
            <div class="stacksDetails text-center">{firstLevelCategory.description}</div>
          </div>

          {/* bo */}
          <div className="container-fluid-md ">
            <div className="row flexCenter px-0 px-md-3">
              {firstLevelCategory &&
                firstLevelCategory.categories &&
                firstLevelCategory.categories.map((category, index) => (
                  <div className="col-11 col-lg-6 mb-4 ms-sm-0 ms-2" key={index}>
                    <div className="stacksContent">
                      <div className="tracks rounded-4 ">
                        <div className="stackName text-center py-4">
                          <i className={category.logo}></i> {category.name}
                        </div>
                        <div className="trackContent flexCenter py-5">
                          {category.stacks &&
                            category.stacks.map((stack, idx) => (
                              <div className="track text-center" key={idx}>
                                <div className="trackIcon">
                                  <img src={stack.logo} alt="stackLogo" className="mb-4" style={{ width: '50px', height: '50px' }} />
                                </div>
                                <div className="trackName">
                                  <Link to={`/stacks/${stack.id}`}><span> {stack.name} </span></Link>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    ))
  );
};

export default StacksSection;
