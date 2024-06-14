import React from "react";
import { Link } from "react-router-dom";
import '../styles/stack/timeline.css'

const getBackgroundColor = (level) => {
  switch (level.toLowerCase()) {
    case "beginner":
      return "#40A578";
    case "intermediate":
      return "#7BC9FF";
    case "advanced":
      return "#FC4100";
    default:
      return "transparent";
  }
};

export const TimelineComponent = ({ trackName, trackDescription, trackLevel, technologies }) => {
  return (
    <div className="Timeline my-5 py-3">
      <div className="TimelineHead centerElement container shadow-sm">
        <span>{trackName}</span>
        <div className='levelContainer'>
          <div
            className="level"
            style={{ backgroundColor: getBackgroundColor(trackLevel) }}
          />
          <div className='tooltipText'>{trackLevel}</div>
        </div>
      </div>
      <div className="hint container py-3 rounded-5">{trackDescription}</div>
      <div className="TimelineContainer container">
        {technologies && technologies.map((item, index) => (
          <div className="TimelineBox" key={index}>
            <div className="TimelineCircle">{index + 1}</div>
            <div className="TimelineContent shadow rounded-4">
              <div className="TimelineContentName">{item.name}</div>
              <div className="TimelineContentDetails">{item.short_description}</div>
              <Link to={`/technologies/${item.id}`} className="TimelineContentButton">
                <button>learn now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};