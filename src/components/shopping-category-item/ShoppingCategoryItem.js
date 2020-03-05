import React, { useContext } from "react";

import AppContext from "./../../context/appContext";
import ShoppingCard from "./../shopping-card/ShoppingCard";

export default props => {
   const context = useContext(AppContext);
   const categoryItems = context.categories.find(cat => cat.id === props.match.params.category);

   return categoryItems.items.map(item => (
      <ShoppingCard
         key={item.id}
         {...item}
         match={props.match}
         history={props.history}
      />
   ));
};
