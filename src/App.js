import React from "react";
// import Test from "./components/Test";
// import Hooks from "./components/Hooks";
import OTP from "./components/otpbox/Otp";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Test /> */}
      {/* <Hooks /> */}
      <OTP
        autoFocus
        isNumberInput
        length={6}
        className="otpContainer"
        inputClassName="otpInput"
        onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
      />
    </div>
  );
}

export default App;
