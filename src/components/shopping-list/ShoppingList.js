import React, { useContext } from "react";
import { Link, Route } from "react-router-dom";

import AppContext from "./../../context/appContext";
import ShoppingItemDetails from "./../shopping-item-details/ShoppingItemDetails";

export default props => {
   const context = useContext(AppContext);
   const category = context.categories.find(
      e => e.id === props.match.params.category
   );
   const categoryItems = category.items.find(
      e => e.id === props.match.params.categoryItem
   );
   return (
      <React.Fragment>
         <div style={{ textAlign: "center" }}>
            {categoryItems.items.map(item => (
               <div key={item.id}>
                  <Link to={`${props.match.url}/${item.id}`}>{item.name}</Link>
               </div>
            ))}
         </div>

         <hr/>

         <Route
            path={`${props.match.path}/:itemId`}
            component={ShoppingItemDetails}
         />
      </React.Fragment>
   );
};
