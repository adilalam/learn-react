import React from "react";
import { useState } from "react";
import axios from "axios";                    
function Form(){
    const [username,setUsername]=useState("")  
    const check=(e)=>{
        setUsername(e.target.value)

    }
    const filesave=(e)=>{
        e.preventDefault()
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
               console.log(response);
               if(response.data.success){
                 alert(response.data.message)
               } else{
                alert(response.data.message)
               }
            })
            .catch((err) => {
              console.log("catch error")
              // console.log(err);
              alert(err.message)
            });
    }

    return(
        <div>
            <form onSubmit={filesave}>
                <input type="text"placeholder="name" value={username}  onChange={check} /> 
                <button disabled={false} style={{
                   backgroundColor: '#4CAF50',
                   border: 'none',
                   color: 'white',
                   padding: '15px 32px',
                   textAlign: 'center',
                   textDecoration: 'none',
                   display: 'inline-block',
                   fontSize: '16px',
                   margin: '4px 2px',
                   cursor: 'pointer'
                }}>submit</button>
            </form>
        </div>
    )

}


export default Form;