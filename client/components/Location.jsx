import React, { useState } from "react";

const Budget = () => {
  const [selectedCards, setSelectedCards] = useState([false, false, false]);

  const handleSelectCard = (index) => {
    const updatedSelectedCards = Array(3).fill(false);
    updatedSelectedCards[index] = true;
    setSelectedCards(updatedSelectedCards);
  };
  return (
    <>
    <h1 className='typ'>Choose your Location</h1>
    <div className="budget">
    <div className="cards">
      <img className="imgg" src="./src/assets/bang.png" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Bengaluru</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(0)}
              disabled={selectedCards[0]}
            >
              {selectedCards[0] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards">
      <img className="imgg" src="./src/assets/mumbai.avif" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Mumbai</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(1)}
              disabled={selectedCards[1]}
            >
              {selectedCards[1] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards">
      <img className="imgg" src="./src/assets/ncr.avif" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Delhi</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(2)}
              disabled={selectedCards[2]}
            >
              {selectedCards[2] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards">
      <img className="imgg" src="./src/assets/hyd.png" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Hyderabad</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(3)}
              disabled={selectedCards[3]}
            >
              {selectedCards[3] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards">
      <img className="imgg" src="./src/assets/ahd.avif" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Ahmedabad</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(4)}
              disabled={selectedCards[4]}
            >
              {selectedCards[4] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards">
      <img className="imgg" src="./src/assets/chd.avif" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Chandigarh</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(5)}
              disabled={selectedCards[5]}
            >
              {selectedCards[5] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards">
      <img className="imgg" src="./src/assets/chen.avif" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Chennai</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(6)}
              disabled={selectedCards[6]}
            >
              {selectedCards[6] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards">
      <img className="imgg" src="./src/assets/pune.png" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Pune</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(7)}
              disabled={selectedCards[7]}
            >
              {selectedCards[7] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards" >
      <img className="imgg" src="./src/assets/kolk.avif" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Kolkata</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(8)}
              disabled={selectedCards[8]}
            >
              {selectedCards[8] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

    <div className="cards">
      <img className="imgg" src="./src/assets/koch.avif" alt="Card" />
      <div className="card-content">
        <h2 className="cardtitle">Kochi</h2>
        <button
              className="butt-1"
              onClick={() => handleSelectCard(9)}
              disabled={selectedCards[9]}
            >
              {selectedCards[9] ? "SELECTED" : "Select"}
            </button>
      </div>
    </div>

  </div>
  </>);
};

export default Budget;
