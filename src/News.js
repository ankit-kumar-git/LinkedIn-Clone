import React from "react";
import "./News.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function News({ heading, subtitle }) {
  return (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default News;
