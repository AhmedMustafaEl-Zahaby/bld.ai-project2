import React, { useEffect, useState } from "react";
import Swipe from "./Swipe";
import Basic from "./Basic.json";
function CoursesSection(props) {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch(props.course)
      .then((response) => response.json())
      .then((obj) => setData(obj));
  }, [props.course]);
  if (data.length === 0) {
    setData(Basic);
  }
  let sectionTitle = data.sectionTitle;
  let courseName = data.courseName;
  let courseDesc = data.courseDesc;
  let courses = data.courses;
  return (
    <div className="container">
      <h2 className="header">{sectionTitle}</h2>
      <p className="description">{courseDesc}</p>
      <button className="explore-button">Explore {courseName}</button>
      <Swipe course={courses}></Swipe>
    </div>
  );
}

export default CoursesSection;
