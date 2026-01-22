import React from "react";
// import { Button } from "./Button";
// import loginpic from "./loginpic.png";
import "./Signup.css";
// import user from "./user.svg";
// import lock from "./lock.svg";
import { useNavigate } from "react-router-dom";

function Signup() {
    
    const navigate = useNavigate();

            // if(document.getElementById("first").value === "sara")
            // {const input1=document.getElementById('firstname');
            //     input1.style.border="3px solid red";}
        //     input1.focus();}
        //     else if(document.getElementById("lastname").value == "")
        //     {const input2=document.getElementById("firstname");
        //     input2.focus();}
        //     else if(document.getElementById("email").value == "")
        //     {const input3=document.getElementById("firstname");
        //     input3.focus();}
        //     else if(document.getElementById("password").value == "")
        //     {const input4=document.getElementById("firstname");
        //     input4.focus();}

    //     const inputField = document.getElementById('firstname');
    //   inputField.focus();
    
    return (

        

        <div className="A1" >
            <h1 className="A2" style={{ textAlign: "center",fontFamily:"poppins" }}>SignUp</h1>
            <br />
            <form >
                <div  className="A4" style={{border:"1px solid black"}}><input id="first" name="firstname" type="text" placeholder="FirstName" /></div>

                <div  className="A4"><input id="last" type="text" name="lastname" placeholder="LastName" /></div>

                <div  className="A4"><input id="last" type="text" name="email" placeholder="Email" /></div>

                <div  className="A4"><input id="last" type="text" name="password" placeholder="Password" /></div>
                <br />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button type="button" className="SignUpbtn" onClick={() => navigate("/Login")}  >SignUp</button>
                </div>
            </form>
        </div>

    );
}
export default Signup;  
