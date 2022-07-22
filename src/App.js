// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Home from "../src/components/pages/Home/Home";
import Error from "../src/components/pages/Error/Error";
import ProductDetails from "../src/components/pages/ProductDetails/ProductDetails";
import Product from "../src/components/Product/Product";
import Navbar from "../src/components/Navbar/Navbar";
import Cart from "../src/components/pages/Cart/Cart";
import Footer from "../src/components/Footer/Footer";
import Modal from "../src/components/pages/Modal/Modal";
import PayPal from "./components/PayPal/PayPal";
import EmptyCart from "./components/EmptyCart/EmptyCart";
//context
import AppProvider from "./context/Context";
import StoreContextProvider from "./context/StoreContextProvider";

function App() {
  return (
    <AppProvider>
      <StoreContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product/:id" children={<Product />}>
              <ProductDetails />
            </Route>
            <Route path="/checkout">
              <PayPal />
            </Route>
            <Route path="/emptycart">
              <EmptyCart />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Modal />
          <Footer />
        </Router>
      </StoreContextProvider>
    </AppProvider>
  );
}

export default App;
