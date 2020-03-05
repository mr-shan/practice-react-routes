import React, { useContext } from "react";

import AppContext from "./../../context/appContext";
import ShoppingCard from "./../shopping-card/ShoppingCard";

export default props => {
   const context = useContext(AppContext);

   return context.categories.map(item => (
      <ShoppingCard
         key={item.id}
         {...item}
         match={props.match}
         history={props.history}
      />
   ));
};
