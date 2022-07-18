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
        <div className="section productDetails">
          <h2 className="page-title">{product.title}</h2>
          <article className="details-container">
            {/* image */}
            <div className="details-image">
              <img src={product.image} alt={product.title} />
            </div>

            {/* info */}
            <div className="details-info">
              <div className="text-container">
                <h2>
                  <span>Description: </span>
                  {product.description}
                </h2>
                <h2>
                  <span>Category: </span>
                  {product.category}
                </h2>
                <h2>
                  <span>Rating: </span>
                  {/* {`${product.rating.rate} from ${product.rating.count} vote(s)`} */}
                </h2>
                <h2>
                  <span>Price: </span>$ {product.price}
                </h2>
              </div>
              <div className="btn-container">
                <Link to="/">
                  <button className="btn-dark">back to Store</button>
                </Link>

                <button
                  onClick={() => {
                    dispatch({ type: "ADD_ITEM", payload: product });
                  }}
                  className="btn-light"
                >
                  {product.inCart ? "in Cart" : "add to cart"}
                </button>
              </div>
            </div>
          </article>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
