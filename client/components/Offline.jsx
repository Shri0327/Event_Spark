import React from "react";
import TypeofEvent from "./TypeofEvent";
import Budget from "./Location";
import Venue from "./Venue";
import { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Final from "./Final";

export default function Offline(){

    const [page, setPage] = useState(0);

    const FormTitles = ["Select the Type of Event you want to Organise:", "Budget", "Venue","Final"];
  
  const PageDisplay=()=>{
    if(page===0){
      return <TypeofEvent/>;
    }else if (page===1){
      return <Budget/>;
    }else if (page===2){
      return <Venue/>;
    }else if (page===3){
    return <Final/>;
  }
}

  return (
    <div>
        <Navbar/>
      <div className="header">
        <h1>{FormTitles[page]}</h1>
      </div>
      <div className="trial">
        {PageDisplay()}
      </div>
      <div className="button-container">
        <button className="butt-prev"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button className="butt-next"
          disabled={page === FormTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Next
        </button>
      </div>
      <Footer/>
    </div>
  );
        }