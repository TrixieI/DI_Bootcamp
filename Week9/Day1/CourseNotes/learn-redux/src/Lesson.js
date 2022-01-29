import React from "react";

const Lesson = ({ subject }) => {
  return (
    <>
      <img
        className="image"
        src="https://image.freepik.com/free-photo/web-design-concept-with-drawings_1134-77.jpg"
        alt="logo lesson"
      />
      <h1>
        The lesson of today is about{" "}
        <span style={{ color: "red" }}>{subject}!</span>
      </h1>
    </>
  );
};

export default Lesson;
