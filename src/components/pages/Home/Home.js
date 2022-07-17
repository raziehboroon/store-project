import "./Home.scss";
import React from "react";
// Component(s)
import ProductList from "../../ProductList/ProductList";

const Home = () => {
  return (
    <main className="container">
      <ProductList />
    </main>
  );
};

export default Home;
