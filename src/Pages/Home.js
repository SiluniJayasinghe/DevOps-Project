import React from 'react';
import Logo1 from "./Logo1.png";
import Settings from "./settings.png";
import Homenew from "./Homenew.png";

import { useNavigate } from 'react-router-dom';
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
            <div className="J1">
                <div className="J2">
                    
                    <div style={{position:"absolute", width:"1225px", height:"50px"}}>
                        <div style={{position:"absolute",left:"1062.1px", width:"200px", height:"50px", display:"flex", flexDirection:"row"}}>
                            <div style={{borderRadius:"50px",width:"40px",height:"40px",backgroundColor:"rgb(14, 10, 70)",margin:"5px 10px 5px 10px"}}></div>
                            <div style={{borderRadius:"50px",width:"40px",height:"40px",backgroundColor:"rgba(228, 231, 231, 0.781)",margin:"5px 10px 5px 10px"}}></div>
                            <div style={{borderRadius:"50px",width:"40px",height:"40px",backgroundColor:"rgb(14, 10, 70)",margin:"5px 10px 5px 10px"}}></div>
                        </div>
                    </div>

                    <div style={{position:"absolute", width:"1227px", height:"50px"}}>
                        <div style={{position:"absolute",left:"1062.1px", width:"200px", height:"50px", display:"flex", flexDirection:"row"}}>
                            <div className="w">
                                <img className="D101" src={Homenew} alt="home" style={{width:"40px",boxShadow: "0px 0px 10px rgb(255, 255, 255)",borderRadius:"40px", cursor:"pointer"}} ></img>
                                <span className="q01" style={{ backgroundColor: "dodgerblue", fontSize: "14px",padding: "5px 10px",borderRadius: "5px", position:"relative", top:"0px", left:"-8px"}}>Home</span>
                            </div>
                            <div className="w">
                                <img className="D202" src={Settings} alt="cart" style={{width:"41px",margin:"5px 10px 5px 10px",cursor:"pointer"}} onClick={() => navigate("/Cart")}></img>
                                <span className="q" style={{ backgroundColor: "black", fontSize: "14px",padding: "5px 10px",borderRadius: "5px", position:"relative", top:"45px", left:"-12px", color:"white"}}>Settings</span>
                            </div>
                            <div className="w">
                                <img className="D302" src={Logo1} alt="settings" style={{width:"41px",margin:"5px 10px 5px 10px",cursor:"pointer"}}></img>
                                <span className="q" style={{ backgroundColor: "black", fontSize: "14px",padding: "5px 10px",borderRadius: "5px", position:"relative", top:"45px", left:"-10px", color:"white"}}>Logout</span>
                            </div>
                            
                        </div>
                    </div>


                    


                    {/* <div className="grp">

                        <div className="tipgrp">

                            <div className="tip" >
                                <img className="B1" alt="img" src={Homenew} style={{ boxShadow: "0px 0px 10px rgb(255, 255, 255)", borderRadius: "40px" }} />

                                <span className="hover" style={{ backgroundColor: "dodgerblue", left: "-12px", fontSize: "14px" }}>Home</span>

                            </div>

                            <div className="tip">
                                <img src={shop} alt="img" className="B2" onclick="document.location='HTML.html'" />
                                <span className="hover" style={{ left: "-17px", fontSize: "14px" }}>Cart</span>

                            </div>

                            <div className="tip" id="id1">
                                <img src={Settings} alt="img" className="B3" onclick="document.location='Settings.html'" />
                                <span className="hover" style={{ left: "-18px", fontSize: "14px" }}>Settings</span>

                            </div>

                            <div className="tip">
                                <img src={Logo1} alt="img" className="B4" onclick="document.location='HTML.html'" />
                                <span className="hover" style={{ left: "-17px", fontSize: "14px" }}>Logout</span>

                            </div>

                        </div>






                    </div> */}

                </div>


                <div className="J3">
                    <div className="container">

                        <h2 className="J6" style={{ textAlign: "center" }}> Hello User</h2>
                        <p style={{ textAlign: "center", marginTop: " 20px", marginBottom: "15px" }}><span id="currentdate"></span></p>

                        
                    </div>
                     <div className="availablespace" > {/*style={{ border: "3px solid steelblue", borderRadius: "10px" }}> */}
                        
                        <div className="Maincontent" >

                            
                        </div>
                    </div>


                </div>




            </div>




        </div >
  )
}
