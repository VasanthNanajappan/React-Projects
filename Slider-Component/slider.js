import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
export default function App() {
  return (
    <div className="app">
      <div className="carousel">
        <Image />
      </div>
    </div>
  );
}

const sliderData = [
  {
    image:
      "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
  },
];

function Image() {
  const [current, setCurrent] = useState(0);

  function handlePrevious() {
    setCurrent(current === 0 ? sliderData.length - 1 : current - 1);
  }

  function handleNext() {
    setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
  }

  return (
    <section>
      <FaArrowAltCircleLeft
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      <FaArrowAltCircleRight
        className="arrow arrow-right"
        onClick={handleNext}
      />

      <div className="carousel">
        {sliderData.map(function (item, i) {
          return (
            <img
              src={item.image}
              alt="hello"
              key={i}
              className={current === i ? "slide" : "slide-hidden"}
            />
          );
        })}
        <span className="indicators">
          {sliderData.map(function (_, i) {
            return (
              <button
                key={i}
                className={current === i ? "indicator" : "indicator-inactive"}
                onClick={() => setCurrent(i)}
              />
            );
          })}
        </span>
      </div>
    </section>
  );
}
