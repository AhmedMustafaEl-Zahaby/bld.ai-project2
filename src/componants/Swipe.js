import React from "react";
import CoursesContainer from "./CoursesContainer";
function Swipe() {
  return (
    <div className="swiper">
      <CoursesContainer></CoursesContainer>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
}
export default Swipe;
