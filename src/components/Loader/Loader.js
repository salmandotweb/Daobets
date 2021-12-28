import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div class="spinner">
      <div class="blob top"></div>
      <div class="blob bottom"></div>
      <div class="blob left"></div>

      <div class="blob move-blob"></div>
    </div>
  );
}

export default Loader;
