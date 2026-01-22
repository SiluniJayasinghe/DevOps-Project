import React from "react";
// import { Button } from "./Button";
// import loginpic from "./loginpic.png";
import "./Login.css";
import user from "./user.svg";
import lock from "./lock.svg";
import pic4 from "./pic4.jpg";
import { useNavigate } from "react-router-dom";





function Login() {
    const navigate = useNavigate();
    return (

        <div style={{ position:"relative",height: "574px" }}>

            <div style={{position:"absolute",left:"195px",top:"175.795px"}}>
                <img src={pic4} alt="login" className="c1" width="390px" />
            </div>

            <div className="form-box" style={{position:"absolute",top:"125px",left:"670px"}}>
                <h1 style={{ color: "white", fontFamily: "poppins" }}>Login</h1>

                <form>
                    <div className="input-group" >
                        <div className="input-field" >
                            <img src={user} alt="user" width="20px" className="c2" />
                            <input id="EnteredUsername" type="text" placeholder="Username" />
                        </div>

                        <div className="input-field" >
                            <img src={lock} alt="lock" width="18px" className="c3" />
                            <input id="EnteredPassword" type="password" placeholder="Password" />
                        </div>
                        <br />

                    </div>

                    <div>
                        <button type="button" className="Loginbtn" onClick={() => navigate("/Home")}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;  