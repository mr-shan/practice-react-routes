import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AppContextProvider from "./context/ContextProvider";

import Navbar from "./components/nav/Navbar";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import ShoppingCategory from "./components/shopping-category/ShoppingCategory";
import ShoppingCategoryItem from "./components/shopping-category-item/ShoppingCategoryItem";
import ShoppingList from "./components/shopping-list/ShoppingList";
import ShoppingItemDetails from "./components/shopping-item-details/ShoppingItemDetails";
import Home from "./components/home/Home";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/"><Redirect to="/home"/></Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/shopping" component={ShoppingCategory} />
            <Route exact path="/shopping/:category" component={ShoppingCategoryItem} />
            <Route path="/shopping/:category/:categoryItem" component={ShoppingList} />
            
            <Route exact path="/shopping-cart" component={ShoppingCart} />
          </Switch>
        </BrowserRouter>
      </AppContextProvider>
    </div>
  );
};

export default App;
