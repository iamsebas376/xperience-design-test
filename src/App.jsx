import React, { useState } from "react";
import Form from "./components/Form";
import Carousel from "./components/Carousel";
import SuccessAlert from "./components/SuccessAlert";

function App() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleFormSubmit = () => {
    setShowSuccessAlert(true);

    setTimeout(() => {
      setShowSuccessAlert(false);
    }, 3000);
  };

  return (
    <div className="font-inter bg-background ">
      {!showSuccessAlert ? (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 min-h-screen p-4 ">
          <Form onFormSubmit={handleFormSubmit} />
          <Carousel />
        </div>
      ) : (
        <SuccessAlert />
      )}
    </div>
  );
}

export default App;
