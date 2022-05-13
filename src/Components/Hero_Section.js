import React from "react";
import "./Hero_Section.css";
import hero_section_bg_desktop from "../Images/hero_section_bg_desktop.png";
import hero_section_bg_mobile from "../Images/hero_section_bg_mobile.png";

const Hero_Section = (props) => {
  return (
    <div className="hero_section">
      <div className="hero_section_bg">
        {/*For desktop size*/}
        <img
          src={hero_section_bg_desktop}
          alt="workout"
          style={{ height: "350px", width: "100%" }} className="hero_section_bg_desktop"
        ></img>
        {/*For mobile size*/}
        <img
          src={hero_section_bg_mobile}
          alt="workout"
          style={{ height: "350px", width: "100%" }} className="hero_section_bg_mobile"
        ></img>
      </div>
       {/*For desktop & mobile sizes both*/}
      <div className="hero_section_content">
            Stronger
            <div style={{ color: "#FFFFFF" }}>Tomorrows</div>
            Starting Todays
      </div>
    </div>
  );
};

export default Hero_Section;
