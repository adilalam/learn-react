import React, { useState } from "react";
import axios from "axios";

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
  const [userdata, setUserdata] = useState([]);
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [loading, setLoading] = useState(false);
  const [editform, setEditform] = useState(false);

  // this place for call an api for first time
  // useEffect(() => {}, []);

  // use for call/invoke function
  // ()

  // use for doing some task inside that function, after invoking/calling
  // () => {}

  const getUserList = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://evening-cove-22757.herokuapp.com/todos/`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // console.log(response);
        setUserdata(response.data.todos);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!username) {
      alert("Please provide text to add");
    } else {
      // alert(username);
      if (editform) {
        // alert("update record");

        axios({
          method: "POST",
          url: `https://evening-cove-22757.herokuapp.com/todos/${userid}`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            text: username,
          },
        })
          .then((response) => {
            // console.log(response);
            getUserList();
            setUsername("");
            setUserid("");
            setEditform(false);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        // alert("create record");

        axios({
          method: "POST",
          url: `https://evening-cove-22757.herokuapp.com/todos/`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            text: username,
          },
        })
          .then((response) => {
            // console.log(response);
            getUserList();
            setUsername("");
            setUserid("");
            setEditform(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  const changePublish = (data) => {
    // console.log(data)
    axios({
      method: "POST",
      url: `https://evening-cove-22757.herokuapp.com/todos/${data._id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        completed: !data.completed,
        text: data.text,
      },
    })
      .then((response) => {
        // console.log(response);
        getUserList();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editHandler = (data) => {
    // alert(JSON.stringify(data))
    setEditform(true);
    setUsername(data.text);
    setUserid(data._id);
  };

  const CancelEditForm = (e) => {
    e.preventDefault();
    setEditform(false);
    setUsername("");
  };

  const deleteHandler = (data) => {
    axios({
      method: "DELETE",
      url: `https://evening-cove-22757.herokuapp.com/todos/${data._id}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        getUserList();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // this place for render in UI (browser) this part also call jsx part, react compile it to HTML before rendering
  return (
    <div>
      <button onClick={() => getUserList()}>Fetch list of all</button>
      <h4>Blog List</h4>
      {loading && <h1>Loading...</h1>}
      {/* {
        userdata.map((person, index) => {
          return (
            <p key={index}>{person.text} {"-"} {person._id}</p>
          )
        })
      } */}
      {userdata.map((person, index) => (
        <div key={index}>
          <h4
            style={
              person.completed
                ? { background: "green", color: "#fff", width: "fit-content" }
                : { background: "red", color: "#fff", width: "fit-content" }
            }
          >
            {person.text} {"--"}{" "}
            <button onClick={() => changePublish(person)}>
              {person.completed ? "Make UnPublished" : "Make Published"}
            </button>{" "}
            <button onClick={() => editHandler(person)}>Edit</button>{" "}
            <button onClick={() => deleteHandler(person)}>Delete</button>
          </h4>
        </div>
      ))}
      <form onSubmit={submitHandler}>
        Name{" "}
        <input type="text" value={username} onChange={inputChangeHandler} />
        <button>Submit</button>{" "}
        {editform && <button onClick={CancelEditForm}>Cancel Form</button>}
      </form>
    </div>
  );
}

export default Hooks;
