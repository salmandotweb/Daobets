import React from "react";
import FormModal from "../FormModal/FormModal";
import "./Banner.css";
import "../../index.css";

export default function Banner({ title, btn, classN }) {
  return (
    <>
      <div className={`banner ${classN}`}>
        <div className="banner-circle">
          <h1>{title}</h1>
          {/* <button className="btn askBtn">{btn}</button> */}
          <FormModal />
        </div>
      </div>
    </>
  );
}
