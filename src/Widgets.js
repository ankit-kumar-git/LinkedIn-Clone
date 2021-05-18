import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import News from "./News";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      <News
        heading="Sputnik COVID-19 vaccine for ₹995"
        subtitle="Top news - 30,438 readers"
      />
      <News
        heading="Google dips toe into creator wars"
        subtitle="2d ago • 622 readers"
      />
      <News
        heading="Pfizer vaccine approved for 12-15yo"
        subtitle="3d ago • 19,829 readers"
      />
      <News
        heading="Hello, where are my groceries?"
        subtitle="3d ago • 306 readers"
      />
      <News
        heading="How India Inc is supporting its staff"
        subtitle="4d ago • 356 readers"
      />
    </div>
  );
}

export default Widgets;
