import React from "react";
import { GoCheckCircle } from "react-icons/go";

function SuccessAlert() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="bg-background-2 rounded-2xl flex flex-col justify-center items-center w-[353px] h-[550px] md:w-[589px] lg:w-[789px]  ">
        <GoCheckCircle className="text-8xl text-green-1" />
        <h1 className="text-5xl font-semibold text-primary mt-4">Success!</h1>
        <p className="text-lg font-medium text-secondary mt-3">
          Account Created Successfully!
        </p>
        <p className="text-4xl font-semibold text-purple-1 mt-16">Awesome!</p>
      </div>
    </div>
  );
}

export default SuccessAlert;
