import React from "react";
import './TShirt.css'
const TShirt = ({ tshirt, handleAddToCart }) => {
  const { name, gender, picture, price, _id } = tshirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="photo" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
