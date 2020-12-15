import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import NotFound from './pages/NotFoud';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import Payment from './pages/Payment';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="https://cosmors.github.io/frontend-online-store" component={ Home } />
          <Route exact path="https://cosmors.github.io/frontend-online-store/shoppingcart" component={ ShoppingCart } />
          <Route
            exact
            path="https://cosmors.github.io/frontend-online-store/product-details/:id/:category"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route exact path="https://cosmors.github.io/frontend-online-store/payment" component={ Payment } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
