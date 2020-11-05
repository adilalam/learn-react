import React from "react";
// import Test from "./components/Test";
// import Hooks from "./components/Hooks";
// import OTP from "./components/otpbox/Otp";
import Form from "./components/Form";
import "./App.css";
import One from "./components/play/One";

function App() {
  // const [arr, setArr] = useState(Array(3).fill(""));
  // const [otp, setOtp] = useState("");

  // const inputHandler = (e) => {
  //   // console.log(e)
  //   let arrElm = e.target.value;
  //   // otp += arrElm;
  //   // setOtp(otp);
  // };

  // console.log(otp);

  // const setOtp = () => {
  //   let otp = {};

  //   if (document.getElementById("stp1")) {
  //     let otp1 = document.getElementById("stp1");
  //     otp = otp1.value;
  //   }

  //   console.log(otp);
  // };

  return (
    <div>
      {/* <Test /> */}
      <One />
      {/* <OTP
        autoFocus
        isNumberInput
        length={6}
        className="otpContainer"
        inputClassName="otpInput"
        onChangeOTP={(otp) => console.log("Number OTP: ", otp)}
      /> */}

      {/* {JSON.stringify(arr)}
      {Array(3)
        .fill("")
        .map((_, index) => {
          return <input type="number" key={index} onChange={inputHandler} />;
        })}
      <br /> */}
      {/* <input
        type="text"
        oninput="numberOnly(this.id);"
        onKeyUp={(e) => {
          numberOnly(e);
        }}
        class="test_css"
        maxlength="1"
        id="flight_number"
        name="number"
      /> */}

      {/* <input
        type="text"
        maxlength="1"
        id="stp1"
        // onKeyUp={(e) => {
        //   let id = "stp2";
        //   if (e.keyCode == 8) {
        //     id = "stp1";
        //   }
        //   changeTab(id);
        // }}
      // />
      
      // <button
      //   type="button"
      //   className="otp_btn open_cat_modal"
      //   onClick={() => {
      //     setOtp();
      //   }}
      // >
      //   Continue
      // </button> */}
    </div>
  );
}

export default App;
