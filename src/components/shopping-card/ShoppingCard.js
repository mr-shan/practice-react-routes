import React from "react";

import styles from "./ShoppingCard.module.css";

export default props => {
   const clickHandler = () => {
      props.history.push(`${props.match.url}/${props.id}`);
   };

   return (
      <div
         className={styles.shoppingCardContainer}
         style={
            props.name.includes("comming soon")
               ? { pointerEvents: "none" }
               : null
         }
      >
         <h3 onClick={clickHandler}>
            {props.name}
         </h3>
         <p>{props.description}</p>
         <label>{props.items.length + " items found!"}</label>
      </div>
   );
};
