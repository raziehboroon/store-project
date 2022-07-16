import React, { useContext } from "react";
import "./PlantList.scss";
import Plant from "../Plant/Plant";
import { AppContext } from "../../context/Context";

const PlantList = () => {
  const { data } = useContext(AppContext);
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <section className="row align-items-center justify-content-center pt-1 pb-3">
      <h2 className="plant-title text-center mt-2">all products</h2>
      {data.map((item) => (
        <Plant key={item.id} {...item} />
      ))}
      <div className="col-12">
        <button
          className="btn fw-bold text-capitalize rounded-circle p-2 my-4 mx-auto d-block"
          id="btn-home"
          onClick={() => topFunction()}
        >
          top
        </button>
      </div>
    </section>
  );
};

export default PlantList;
