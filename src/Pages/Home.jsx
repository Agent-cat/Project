import React, { useState } from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full md:w-[83%] m-2 h-full overflow-y-scroll flex flex-col justify-center rounded-xl">
      <div className="w-full h-[300px] md:h-[40%]">
        <div className="w-full rounded-2xl h-full relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            id="slider"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {[img1, img2, img3, img1, img2].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full rounded-2xl object-cover flex-shrink-0"
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-opacity duration-300 ${
                  currentIndex === index ? "bg-white" : "bg-white opacity-50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-blue-600 p-1 md:p-2 rounded-full transition-colors duration-300"
            aria-label="Previous slide"
            onClick={prevSlide}
          >
            &#10094;
          </button>
          <button
            className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-blue-600 p-1 md:p-2 rounded-full transition-colors duration-300"
            aria-label="Next slide"
            onClick={nextSlide}
          >
            &#10095;
          </button>
        </div>
      </div>
      <div className="w-full h-auto md:h-[60%]"></div>
    </div>
  );
};

export default Home;
