import React from "react";
import CourseCard from "./CourseCard";
function CoursesContainer(props) {
  let data = props.course;
  function renderData() {
    let view = data.map((obj) => {
      return <CourseCard key={obj.id} course={obj}></CourseCard>;
    });
    return view;
  }
  return <div className="courses swiper-wrapper">{renderData()}</div>;
}
export default CoursesContainer;
