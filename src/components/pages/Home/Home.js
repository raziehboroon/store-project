import React, { useContext } from "react";
import "./Home.scss";
// Context(s)
import { AppContext } from "../../../context/Context";
// Function(s)
import { goToTop } from "../../../helper/functions";
// Component(s)
import Product from "../../Product/Product";

const Home = () => {
  const { data } = useContext(AppContext);

  return (
    <main>
      <h1 className="page-title">all products</h1>
      <div className="products-container section">
        {data.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>

      <button className="btn-top" onClick={goToTop}>
        top
      </button>
    </main>
  );
};

export default Home;
