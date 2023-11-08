import React, { useState } from "react";

function Venue() {
  const [priceRange, setPriceRange] = useState({ max: 7000 });

  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({
      ...priceRange,
      [name]: Number(value),
    });
  };

  return (
    <>
      <h1 className="typ">Specify Budget and additional requirements</h1>
      <div className="pr">
        <div className="pricerange">
          <label className="max" htmlFor="maxPrice">
            Maximum Budget:
          </label>
          <input
            className="pbar"
            type="range"
            id="maxPrice"
            name="max"
            value={priceRange.max}
            min={7000}
            max={2000000}
            step={1}
            onChange={handlePriceRangeChange}
          />
          <span className="max">₹{priceRange.max}</span>
          <p className="det">
            (Note: This is only a rough figure for initial planning, EventSpark
            has a pay-as-you-go system which makes your event planning cost
            efficient!!)
          </p>
        </div>

        <div className="pricerange-2">
          <label className="max" htmlFor="add-details">
            Specify Additional Requirements:
          </label>
          <p className="det">
            (for example: Round
            tables,computers,projector,screens,valet,caterars etc)
          </p>
          <textarea className="add-det"></textarea>
        </div>
      </div>
    </>
  );
}

export default Venue;
