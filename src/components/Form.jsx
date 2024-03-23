import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { Alert, Snackbar } from "@mui/material";

function Form({ onFormSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const validatePassword = (value) => {
    const hasValidLength = value.length >= 8;
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    setIsLengthValid(hasValidLength);
    setHasSpecialChar(hasSpecial);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && email && isLengthValid && hasSpecialChar) {
      setFirstName("");
      setEmail("");
      setPassword("");
      setIsLengthValid(false);
      setHasSpecialChar(false);
      onFormSubmit();
    } else {
      setAlertMessage("Please verify all required fields");
      setOpenAlert(true);
    }
  };

  const handleCloseAlert = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <div className="col-span-1 place-self-center my-28 md:my-0">
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="error">
          {alertMessage}
        </Alert>
      </Snackbar>
      <h1 className="text-3xl text-center font-semibold text-primary">
        Start Your Journey <br />
        with a 7-day free trial
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-7">
        <div>
          <p className="text-sm text-secondary font-medium">First name*</p>
          <input
            type="text"
            placeholder="Enter your first name"
            className="w-full p-3 my-2 rounded-xl text-primary border-2 border-gray-2 outline-purple-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <p className="text-sm text-secondary font-medium">Email*</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 my-2 rounded-xl text-primary border-2 border-gray-2 outline-purple-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative">
          <p className="text-sm text-secondary font-medium">Password*</p>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-3 my-2 rounded-xl text-primary border-2 border-gray-2 outline-purple-2"
            value={password}
            onChange={handlePasswordChange}
          />
          <button
            type="button"
            aria-label="toggle password visibility"
            className="absolute inset-y-0 right-0 px-3 mt-5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-3" />
            ) : (
              <FaEye className="text-gray-3" />
            )}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle
            className={
              isLengthValid
                ? "text-green-2 text-xl transition duration-300 ease-in-out"
                : "text-gray-2 text-xl transition duration-300 ease-in-out"
            }
          />
          Must be at least 8 characters
        </div>
        <div className="flex items-center gap-2 mt-2">
          <FaCheckCircle
            className={
              hasSpecialChar
                ? "text-green-2 text-xl transition duration-300 ease-in-out"
                : "text-gray-2 text-xl transition duration-300 ease-in-out"
            }
          />
          Must contain one special character
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 rounded-xl font-semibold bg-primary text-white hover:bg-purple-1 transition duration-300 ease-in-out"
          aria-label="create account"
        >
          Create account
        </button>
        <p className="text-sm text-center mt-2 text-secondary font-normal [&>strong]:text-primary">
          Already have an account? <strong>Log in</strong>
        </p>
      </form>
    </div>
  );
}

export default Form;
