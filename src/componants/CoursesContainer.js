import React from "react";
import CourseCard from "./CourseCard";
import Data from "./Data.json";
function CoursesContainer() {
  let data = Data;
  console.log(data.length);
  function renderData() {
    let view = data.map((obj) => {
      return <CourseCard course={obj}></CourseCard>;
    });
    return view;
  }
  return <div className="courses swiper-wrapper">{renderData()}</div>;
}
export default CoursesContainer;
