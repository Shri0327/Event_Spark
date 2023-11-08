import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Online() {
  return (
    <>
      <Navbar/> 
      <div className="online-post">
      <h2 className="shrih2">Make a Post</h2>
      <form>
        <label className="shrilabel"  htmlFor="name">Name of the Event</label>
        <input className="shriinput"
          type="text"
          name="name"
          
        />
        <label className="shrilabel" htmlFor="description">Description</label>
        <textarea
          
          name="description"
          
        ></textarea>
        <label className="shrilabel" htmlFor="instructions">Link for your event</label>
        <input className="shriinput"
          type="url"
          name="instructions"
        />

        <label className="shrilabel" htmlFor="imageUrl">
          Upload Suitable Image for your event
        </label>
        <input className="shriinput"
          type="file"
        />
        <label className="shrilabel" htmlFor="date">Date</label>
        <input className="shriinput"
          type="date"
          name="date"
        />
        <button className="btn">
          <span>Post Event</span>
          </button>
      </form>
    </div>
      <Footer/>
  </>);
};
