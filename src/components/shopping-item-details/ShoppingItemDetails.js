import React, { useContext } from "react";

import AppContext from "./../../context/appContext";
import styles from "./ShoppingItemDetails.module.css";

export default props => {
   console.log(props.match.params);

   const context = useContext(AppContext);
   const categoryItems = context.categories.find(
      cat => cat.id === props.match.params.category
   );
   const currentCatItem = categoryItems.items.find(
      item => item.id === props.match.params.categoryItem
   );
   const currentItem = currentCatItem.items.find(item => item.id === props.match.params.itemId);
   
   const addToCartClickHandler = () => context.addToCart(currentItem);

   return (
      <div className={styles.shoppingItemContainer}>
         <h4>{currentItem.name}</h4>
         <div>₹ {currentItem.price}</div>
         
         <button onClick={addToCartClickHandler}>Add to Cart</button>
      </div>
   );
};
