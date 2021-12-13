import React from "react";
import "./NewsLetter.css";
import "../../index.css";

export default function NewsLetter() {
  return (
    <form className="newsletter">
      <h1>Signup for early access</h1>
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" required />
        <button className="btn subscribeBtn">Subscribe</button>
      </div>
    </form>
  );
}
