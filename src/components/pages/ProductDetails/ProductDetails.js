import "./ProductDetails.scss";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
// Context(s)
import { AppContext } from "../../../context/Context";
import { StoreContext } from "../../../context/StoreContextProvider";
// Component(s)
import Error from "../Error/Error";
// Function(s)
import { getSingleProduct } from "../../../helper/functions";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const { id } = useParams();
  const { dispatch } = useContext(StoreContext);
  const { data } = useContext(AppContext);

  useEffect(() => {
    const currentProduct = getSingleProduct(data, Number(id));
    setProduct(currentProduct);
    setError(!currentProduct);
  }, [id, data]);

  if (error) {
    return <Error />;
  }

  return (
    <>
      {product && (
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
                {/* {`${product.rating.rate} from ${product.rating.count} vote(s)`} */}
              </h6>
              <h6 className="fw-bold">
                <span>Price: </span>$ {product.price}
              </h6>

              <div id="btn-container" className="d-flex">
                <Link to="/">
                  <button
                    className="btn fw-bolder text-capitalize"
                    id="btn-home"
                  >
                    back to Store
                  </button>
                </Link>

                <button
                  onClick={() => {
                    dispatch({ type: "ADD_ITEM", payload: product });
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
      )}
    </>
  );
};

export default ProductDetails;
