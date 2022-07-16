import React, { useEffect, useState, useContext } from "react";
import "./SinglePlant.scss";
import { AppContext } from "../../../context/Context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Error from "../Error/Error";
const SinglePlant = () => {
  const { id } = useParams();
  // console.log(id);
  // console.log(parseInt(id));
  const [product, setProduct] = useState([]);
  const { data, addItemToCart, setShowModal, setModalID } =
    useContext(AppContext);

  useEffect(() => {
    const newProduct = data.find((item) => item.id === Number(id));

    if (newProduct) {
      setProduct(newProduct);
    }
  }, [id, data]);

  if (product.length === 0) {
    return <Error />;
  }

  return (
    <div id="single-plant" className="container section">
      <h2 className="plant-title text-center pt-3 mb-4">{product.title}</h2>
      <div className="row flex-column flex-sm-row mb-3">
        {/* image */}
        <div className="col-12 col-sm-4 d-flex justify-content-center justify-content-sm-end p-0">
          <img
            src={product.image}
            alt={product.title}
            className="rounded p-1 m-0"
          />
        </div>
        {/* info */}
        <div
          id="single-plant-info"
          className="col-12 col-sm-7 mx-auto p-2 px-4"
        >
          <h5>
            <span className="fw-bold">Description: </span>
            {product.description}
          </h5>
          <h6>
            <span className="fw-bold">Category: </span>
            {product.category}
          </h6>
          <h6>
            <span className="fw-bold">Rating: </span>
            {`${product.rating.rate} from ${product.rating.count} vote(s)`}
          </h6>
          <h6 className="fw-bold">
            <span>Price: </span>$ {product.price}
          </h6>

          <div id="btn-container" className="d-flex">
            <Link to="/">
              <button className="btn fw-bolder text-capitalize" id="btn-home">
                back to Store
              </button>
            </Link>

            <button
              onClick={() => {
                addItemToCart(product.id);
                setShowModal(true);
                setModalID(product.id);
              }}
              className="btn fw-bolder text-capitalize"
              id="btn-cart"
            >
              {product.inCart ? "in Cart" : "add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlant;
