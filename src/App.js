import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import Home from "../src/components/pages/Home/Home";
import Error from "../src/components/pages/Error/Error";
import SinglePlant from "../src/components/pages/SinglePlant/SinglePlant";
import Plant from "../src/components/Plant/Plant";
import Navbar from "../src/components/Navbar/Navbar";
import Cart from "../src/components/pages/Cart/Cart";
import Footer from "../src/components/Footer/Footer";
import Modal from "../src/components/pages/Modal/Modal";
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
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/plant/:id" children={<Plant />}>
              <SinglePlant />
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
