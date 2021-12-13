import React from "react";
import "./SectionContent.css";
import "../../index.css";

export default function SectionContent({ title, subTitle, special, classN }) {
  return (
    <div className={`section-content ${classN}`}>
      <h5>{special}</h5>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}
