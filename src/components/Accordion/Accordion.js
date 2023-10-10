import React, { useEffect, useRef, useState } from "react";
// import styles from "./styles.module.scss";
import './styles.css'
const Accordion = ({ title, content, toggleAccordion, active, headingStyleContent, headingStyle, accordionStyle }) => {
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className={"accordion"} style={accordionStyle}>
      {/* //!heading */}
      <div className={"accordion_heading"} onClick={() => toggleAccordion(title)} style={headingStyle}>
        <div className={"accordion_heading_content"} onClick={() => toggleAccordion(title)} style={headingStyleContent}>
          <p className={"head_title"}>{title}</p>
          <span className={`headClick ${active === title ? "turnUp" : ""}`} onClick={() => toggleAccordion(title)}   >
            <i className="fa-solid fa-angle-down"></i>
          </span>
        </div>
      </div>

      {/* //!content */}
      <div className={active === title ? `${"accordion_toggle"} ${"animated"}` : `${"accordion_toggle"}`} style={{ height: active === title ? `${heightEl}` : "0px" }} ref={refHeight}  >
        {content}
      </div>

    </div>
  );
};

export default Accordion;
