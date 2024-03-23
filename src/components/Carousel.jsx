import React, { useState } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import bg1 from "../assets/images/carousel-1/carousel-bg-1.webp";
import bg2 from "../assets/images/carousel-2/carousel-bg-2.webp";
import bg3 from "../assets/images/carousel-3/carousel-bg-3.webp";
import img1 from "../assets/images/carousel-1/image-carousel-1.webp";
import img2 from "../assets/images/carousel-2/image-carousel-2.webp";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const carouselBackgrounds = [bg1, bg2, bg3];

  const CarouselItem = ({ children }) => (
    <div
      className={`bg-cover rounded-3xl min-h-full flex justify-center items-center relative`}
      style={{ backgroundImage: `url(${carouselBackgrounds[currentIndex]})` }}
    >
      {children}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-6 py-4">
        <div className="text-primary text-lg font-semibold">
          {`${currentIndex + 1 < 10 ? "0" : ""}${currentIndex + 1} | ${
            carouselItems.length < 10 ? "0" : ""
          }${carouselItems.length}`}
        </div>
        <div className="flex gap-3">
          {carouselItems.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-20 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
        <div>
          <button
            className="text-primary text-4xl rounded-md transition duration-300 ease-in-out hover:bg-purple-1 hover:text-white"
            onClick={goToPrevSlide}
            aria-label="Previous slide"
          >
            <IoIosArrowRoundBack />
          </button>
          <button
            className="text-primary text-4xl rounded-md transition duration-300 ease-in-out hover:bg-purple-1 hover:text-white"
            onClick={goToNextSlide}
            aria-label="Next slide"
          >
            <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );

  const CarouselItem1 = () => (
    <CarouselItem index={1}>
      <div className="flex flex-col justify-center items-center">
        <img className="w-[40%]" src={img1} alt="image-1-carousel-1" />
        <div>
          <h1 className="text-5xl xl:text-6xl font-semibold text-primary mt-10 ">
            Crafting Tomorrow's <br />
            Digital Narratives
          </h1>
          <p className="text-base xl:text-lg font-medium text-secondary  mt-4">
            Designed for forward-thinking marketing agencies, this template
            <br />
            encapsulates a blend of sleek design elements and dynamic <br />
            animations.
          </p>
        </div>
      </div>
    </CarouselItem>
  );

  const CarouselItem2 = () => (
    <CarouselItem index={2}>
      <div className="flex flex-col justify-center items-center">
        <img className="w-[40%] my-16" src={img2} alt="image-2-carousel-2" />
        <div>
          <h1 className="text-5xl xl:text-6xl font-semibold text-primary ">
            Blending the Human
            <br />
            Experience with the <br />
            Digital Frontier
          </h1>
          <p className="text-base xl:text-lg font-medium text-secondary  mt-4">
            Our cutting-edge solutions seamlessly intertwine the essence of
            <br /> human interaction with the vast expanse of the digital realm.
          </p>
        </div>
      </div>
    </CarouselItem>
  );

  const CarouselItem3 = () => (
    <CarouselItem index={3}>
      <div>
        <h1 className="text-5xl xl:text-6xl font-semibold text-primary text-center">
          Where Humanity and <br /> Technology Become One
        </h1>
        <p className="text-base xl:text-lg font-medium text-secondary text-center mt-10">
          Dive into a world where boundaries fade and possibilities are
          limitless. <br />
          Discover the future, where the human experience and digital innovation
          converge.
        </p>
      </div>
    </CarouselItem>
  );

  const carouselItems = [CarouselItem1, CarouselItem2, CarouselItem3];

  return (
    <div className="hidden lg:block  col-span-1 xl:col-span-2 relative">
      <div className="h-full bg-background-2 rounded-3xl">
        {carouselItems[currentIndex]()}
      </div>
    </div>
  );
}

export default Carousel;
