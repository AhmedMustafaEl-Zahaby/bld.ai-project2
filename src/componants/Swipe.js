import React from "react";
import CoursesContainer from "./CoursesContainer";
function Swipe(props) {
  return (
    <div className="swiper">
      <CoursesContainer course={props.course}></CoursesContainer>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
export default Swipe;
