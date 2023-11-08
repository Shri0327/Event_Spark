import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function Organise() {
  return (
    <>
    <Navbar/>
    <div className="shri">
        
    <img className="lightning" src="./src/assets/graffiti.gif" alt="" />
      
    <div className="card">
      <img  src="./src/assets/overpopulation.gif" alt="online" />
      <Link to="/offline" className="home-button-link">
            <button className="btn">
              <span>Organise an offline event</span>
            </button>
          </Link>
      
    </div>
    <div className="card">
      <img src="./src/assets/presentation.gif"  alt="offline" />
      <Link to="/online" className="home-button-link">
            <button className="btn">
              <span>Promote your online event</span>
            </button>
          </Link>
    </div>
    <img className="lightning" src="./src/assets/graffiti.gif" alt="" />
    </div>
    <Footer/>
    </>
  );
}
