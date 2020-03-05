import React from "react";

import styles from "./ShoppingItem.module.css";

export default props => {
  return (
    <div className={styles.shoppingItemContainer}>
      <label>
        {props.name} - ₹ {props.price}
      </label>
      <button onClick={props.clicked}>Qty: {props.count}</button>
    </div>
  );
};
