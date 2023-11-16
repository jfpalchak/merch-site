import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  return (
    <React.Fragment>
    <div className="product-item">
      <h3>{props.name}</h3>
      <h5>{props.description}</h5>
      <h5>{props.quantity}</h5>
    </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string
};

export default Product;