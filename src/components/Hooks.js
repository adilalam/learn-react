import React, { useState, useEffect } from "react";

// class component
// class Hooks extends Component {

//     state = {
//         // this place for varibale initialization
//     }

//     componentDidMount() {
//         // this place for call an api for first time
//     }

//     // this place for render in UI (browser)
//     render() {
//         return (
//             <div>
//                 hook component
//             </div>
//         )
//     }
// }

function Hooks() {
  // this place for varibale initialization
  const [username, setUsername] = useState("");

  // this place for call an api for first time
  useEffect(() => {}, []);

  // use for call/invoke function
  // ()

  // use for doing some task inside that function, after invoking/calling
  // () => {}

  const inputChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!username) {
      alert("Please provide text to add");
    } else {
      alert(username);
    }
  };

  // this place for render in UI (browser) this part also call jsx part, react compile it to HTML before rendering
  return (
    <form onSubmit={submitHandler}>
      Name <input type="text" value={username} onChange={inputChangeHandler} />
      <button>Submit</button>
    </form>
  );
}

export default Hooks;
