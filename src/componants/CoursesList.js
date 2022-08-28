import React, { useState } from "react";
import CoursesSection from "./CoursesSection";
function CoursesList() {
  let [clicked, setClick] = useState("http://localhost:3000/Python");
  let [selected1, setSelected1] = useState("clicked");
  let [selected2, setSelected2] = useState("");
  let [selected3, setSelected3] = useState("");
  let [selected4, setSelected4] = useState("");
  let [selected5, setSelected5] = useState("");
  let [selected6, setSelected6] = useState("");
  let [selected7, setSelected7] = useState("");
  return (
    <>
      <div className="course-list">
        <h3 className="list-content list-title">
          A Broad selection of courses
        </h3>
        <p className="list-content list-discription">
          Choose from 185,000 online video cources with new additions published
          every month
        </p>
        <ul className="ul-list">
          <li
            id="li-1"
            onClick={() => {
              setClick("http://localhost:3000/Python");
              setSelected1("clicked");
              setSelected2("");
              setSelected3("");
              setSelected4("");
              setSelected5("");
              setSelected6("");
              setSelected7("");
            }}
            className={selected1 + " list-element not-mergin"}
          >
            Python
          </li>
          <li
            id="li-2"
            className={selected2 + " list-element"}
            onClick={() => {
              setClick("http://localhost:3000/Excel");
              setSelected2("clicked");
              setSelected1("");
              setSelected3("");
              setSelected4("");
              setSelected5("");
              setSelected6("");
              setSelected7("");
            }}
          >
            Excel
          </li>
          <li
            id="li-3"
            className={selected3 + " list-element"}
            onClick={() => {
              setClick("http://localhost:3000/Web");
              setSelected3("clicked");
              setSelected2("");
              setSelected1("");
              setSelected4("");
              setSelected5("");
              setSelected6("");
              setSelected7("");
            }}
          >
            Web Development
          </li>
          <li
            id="li-4"
            className={selected4 + " list-element"}
            onClick={() => {
              setClick("http://localhost:3000/JavaScript");
              setSelected4("clicked");
              setSelected2("");
              setSelected3("");
              setSelected1("");
              setSelected5("");
              setSelected6("");
              setSelected7("");
            }}
          >
            Java Script
          </li>
          <li
            id="li-5"
            className={selected5 + " list-element"}
            onClick={() => {
              setClick("http://localhost:3000/DataScience");
              setSelected5("clicked");
              setSelected2("");
              setSelected3("");
              setSelected4("");
              setSelected1("");
              setSelected6("");
              setSelected7("");
            }}
          >
            Data Science
          </li>
          <li
            id="li-6"
            className={selected6 + " list-element"}
            onClick={() => {
              setClick("http://localhost:3000/AWS");
              setSelected6("clicked");
              setSelected2("");
              setSelected3("");
              setSelected4("");
              setSelected5("");
              setSelected1("");
              setSelected7("");
            }}
          >
            AWS Certifications
          </li>
          <li
            id="li-7"
            className={selected7 + " list-element"}
            onClick={() => {
              setClick("http://localhost:3000/Drawing");
              setSelected7("clicked");
              setSelected2("");
              setSelected3("");
              setSelected4("");
              setSelected5("");
              setSelected6("");
              setSelected1("");
            }}
          >
            Drawing
          </li>
        </ul>
      </div>
      <CoursesSection course={clicked}></CoursesSection>
    </>
  );
}
export default CoursesList;
