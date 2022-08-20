import React from "react";
import Swipe from "./Swipe";
function CoursesSection() {
  return (
    <div className="container">
      <h2 className="header">Expand your career opportunities with Python</h2>
      <p className="description">
        Take one of Udemy’s range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You’ll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to
      </p>
      <button className="explore-button">Explore Python</button>
      <Swipe></Swipe>
    </div>
  );
}

export default CoursesSection;
