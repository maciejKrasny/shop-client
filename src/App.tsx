import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./views/products/Products.view";
import Details from "./views/details/Details.view";
import Cart from "./views/cart/Cart.view";
import { ShopReducer } from "./store/shop.reducer";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import styled from "styled-components";


const rootReducer = combineReducers({
  shop: ShopReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <PageWrapper>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={["/products", "/", ""]} component={Products} />
            <Route exact path="/products/:id" component={Details} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Router>
        <Footer />
      </PageWrapper>
    </Provider>
  );
}

export default App;
