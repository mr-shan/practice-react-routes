import React, { useReducer } from "react";

import AppContext from "./appContext";
import { reducer, ADD_TO_CART, REMOVE_FROM_CART } from "./reducer";

const initialState = {
   categories: [
      {
         id: "electronics",
         name: "Electronics",
         items: [
            {
               id: "tv",
               name: "TV",
               description: "Find all the TVs here.",
               items: [
                  {
                     id: "led-tv",
                     name: "LED TV",
                     price: 45000
                  },
                  {
                     id: "lcd-tv",
                     name: "LCD TV",
                     price: 25000
                  },
                  {
                     id: "oled-tv",
                     name: "OLED TV",
                     price: 125000
                  }
               ]
            },
            {
               id: "refrigerator",
               name: "Refrigerator",
               description: "Find all the Refrigerator here.",
               items: [
                  {
                     id: "singleDoorRefr",
                     name: "Single Door Refrigerator",
                     price: 15000
                  },
                  {
                     id: "doubleDoorRefr",
                     name: "Double Door Refrigerator",
                     price: 25000
                  },
                  {
                     id: "superRefr",
                     name: "Super Refrigerator",
                     price: 125000
                  }
               ]
            },
            {
               id: "washing-machine",
               name: "Washing Machine",
               description: "Find all the TVs here.",
               items: [
                  {
                     id: "wm-top-mount",
                     name: "Top Mounted Washing Machine",
                     price: 25000
                  },
                  {
                     id: "wm-front-mount",
                     name: "Front Mounter Washing Machine",
                     price: 45000
                  }
               ]
            },
            {
               id: "musics-system",
               name: "Music System",
               description: "Find all the Music Systems here.",
               items: [
                  {
                     id: "2.1-music-system",
                     name: "2.1 Channel Music System",
                     price: 25000
                  },
                  {
                     id: "5.1-music-system",
                     name: "5.1 Channel Music System",
                     price: 45000
                  },
                  {
                     id: "7.1-music-system",
                     name: "7.1 Channel Music System",
                     price: 75000
                  }
               ]
            }
         ],
         description: "Find all the electronics here."
      },
      {
         id: "books",
         name: "Books (comming soon)",
         items: [
            {
               id: "harry-potter",
               name: "Harry Potter",
               price: 1450
            },
            {
               id: "game-of-thrones",
               name: "Game of thrones",
               price: 1900
            },
            {
               id: "lotr",
               name: "Lord of the rings",
               price: 1150
            },
            {
               id: "witcher",
               name: "The witcher",
               price: 850
            }
         ],
         description: "Find all the books here."
      },
      {
         id: "cloths",
         name: "Cloths (comming soon)",
         items: [
            {
               id: "jeans",
               name: "Jeans",
               price: 1450
            },
            {
               id: "t-shirts",
               name: "T-Shirt",
               price: 850
            },
            {
               id: "hood",
               name: "Hood",
               price: 2450
            }
         ],
         description: "Find all the cloths here."
      }
   ],

   cart: []
};

export default props => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const addToCart = item => {
      dispatch({
         type: ADD_TO_CART,
         payload: item
      });
   };
   const removeFromCart = itemId => {
      dispatch({
         type: REMOVE_FROM_CART,
         itemId: itemId
      });
   };
   return (
      <AppContext.Provider
         value={{
            shoppingList: state.shoppingList,
            cart: state.cart,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            categories: state.categories
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};
