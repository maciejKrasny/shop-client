import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./views/Products.view";
import Details from "./views/Details.view";
import Cart from "./views/Cart.view";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/products"} component={Products} />
        <Route exact path="/products/:id" component={Details} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
