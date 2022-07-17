import React, { useContext } from "react";
import "./ProductList.scss";
// Context(s)
import { AppContext } from "../../context/Context";
// Function(s)
import { goToTop } from "../../helper/functions";
// Component(s)
import Product from "../Product/Product";

const ProductList = () => {
  const { data } = useContext(AppContext);

  return (
    <section className="row align-items-center justify-content-center pt-1 pb-3">
      <h2 className="plant-title text-center mt-2">all products</h2>
      {data.map((item) => (
        <Product key={item.id} {...item} />
      ))}
      <div className="col-12">
        <button
          className="btn fw-bold text-capitalize rounded-circle p-2 my-4 mx-auto d-block"
          id="btn-home"
          onClick={goToTop}
        >
          top
        </button>
      </div>
    </section>
  );
};

export default ProductList;
