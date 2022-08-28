import React from "react";

function CourseCard(props) {
  let obj = props.course;
  return (
    <div key={obj.id} className="course-card swiper-slide">
      <img className="course-image" src={obj["image"]} alt={obj["title"]}></img>
      <h3 className="course-title">{obj["title"]}</h3>
      <p className="course-author">{obj["author"][0]["name"]}</p>
      <span className="rate">
        {+obj["rating"].toString().substr(0, 3) + " "}
      </span>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star-half-stroke"></i>
      <span className="students">{" (" + obj["people"] + ")"}</span>
      <h3 className="price">{"E€" + obj["price"]}</h3>
    </div>
  );
}
export default CourseCard;
