import React, { useState } from "react";

export default function TypeofEvent() {
  const [selectedCards, setSelectedCards] = useState([false, false, false]);

  const handleSelectCard = (index) => {
    const updatedSelectedCards = Array(6).fill(false);
    updatedSelectedCards[index] = true;
    setSelectedCards(updatedSelectedCards);
  };

  return (
    <>
      <h1 className="typ">Choose your type of event</h1>
      <div className="typeofevent">
        <div className={`card ${selectedCards[0] ? "selected" : ""}`}>
          <img className="imgss" src="./src/assets/meeting.gif" alt="Card" />
          <div className="card-content">
            <h2 className="card-title">Seminars</h2>
            <p>
              A seminar is a form of academic instruction, either at an academic
              institution or offered by a commercial or professional
              organization.
            </p>
            <button
              className="butt"
              onClick={() => handleSelectCard(0)}
              disabled={selectedCards[0]}
            >
              {selectedCards[0] ? "SELECTED" : "Select"}
            </button>
          </div>
        </div>
        <div className={`card ${selectedCards[1] ? "selected" : ""}`}>
          <img className="imgss" src="./src/assets/potter-wheel.gif" alt="Card" />
          <div className="card-content">
            <h2 className="card-title">Workshops</h2>
            <p className="card-description">
              A workshop is a long interactive meeting or educational session
              designed to create a specialized result.
            </p>
            <button
              className="butt"
              onClick={() => handleSelectCard(1)}
              disabled={selectedCards[1]}
            >
              {selectedCards[1] ? "SELECTED" : "Select"}
            </button>
          </div>
        </div>
        <div className={`card ${selectedCards[2] ? "selected" : ""}`}>
          <img className="imgss" src="./src/assets/coding.gif" alt="Card" />
          <div className="card-content">
            <h2 className="card-title">Hackathons</h2>
            <p className="card-description">
              Hackathons bring people with technical backgrounds together for
              problem-solving and developing new ideas. 
            </p>
            <button
              className="butt"
              onClick={() => handleSelectCard(2)}
              disabled={selectedCards[2]}
            >
              {selectedCards[2] ? "SELECTED" : "Select"}
            </button>
          </div>
        </div>
        <div className={`card ${selectedCards[3] ? "selected" : ""}`}>
          <img className="imgss" src="./src/assets/box.gif" alt="Card" />
          <div className="card-content">
            <h2 className="card-title">Product Launch</h2>
            <p className="card-description">
              A workshop is a long interactive meeting or educational session
              designed to create a specialized result.
            </p>
            <button
              className="butt"
              onClick={() => handleSelectCard(3)}
              disabled={selectedCards[3]}
            >
              {selectedCards[3] ? "SELECTED" : "Select"}
            </button>
          </div>
        </div>
        <div className={`card ${selectedCards[4] ? "selected" : ""}`}>
          <img className="imgss" src="./src/assets/around-the-world.gif" alt="Card" />
          <div className="card-content">
            <h2 className="card-title">Convention</h2>
            <p className="card-description">
              A workshop is a long interactive meeting or educational session
              designed to create a specialized result.
            </p>
            <button
              className="butt"
              onClick={() => handleSelectCard(4)}
              disabled={selectedCards[4]}
            >
              {selectedCards[4] ? "SELECTED" : "Select"}
            </button>
          </div>
        </div>
        <div className={`card ${selectedCards[5] ? "selected" : ""}`}>
          <img className="imgss" src="./src/assets/conference-room.gif" alt="Card" />
          <div className="card-content">
            <h2 className="card-title">Board Meetings</h2>
            <p className="card-description">
            Board meetings are opportunities for members of an organization's board of directors to get together and review the company's activity
            </p>
            <button
              className="butt"
              onClick={() => handleSelectCard(5)}
              disabled={selectedCards[5]}
            >
              {selectedCards[5] ? "SELECTED" : "Select"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
