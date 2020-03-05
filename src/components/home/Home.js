import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default props => {
  return (
    <div className="home-container">
      <div><Link to="/shopping">Shop Here!</Link></div>
      
      <div><Link to="/shopping-cart">Shopping Cart</Link></div>
    </div>
  );
};
