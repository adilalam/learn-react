import React, { useEffect } from "react";
import axios from "axios";

function Test() {
  useEffect(() => {
    // fetchRecord();

    axios({
      method: "GET",
      url: `https://evening-cove-22757.herokuapp.com/todos/`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const fetchRecord = async () => {
  //   let data = await axios({
  //     method: "GET",
  //     url: `https://evening-cove-22757.herokuapp.com/todos/`,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(data);
  // };

  return <div>this is test</div>;
}

export default Test;
