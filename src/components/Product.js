import React from "react";
import PropTypes from "prop-types";

function Product(props) {
  
  let quantity = props.quantity;

  if (!quantity) {
    quantity = "Out of Stock";
  }

  return (
    <div className="product-item" onClick={() => props.onProductClick(props.id)}>
      <h3>{props.name}</h3>
      <h5>{props.description}</h5>
      <h5>{quantity}</h5>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  onProductClick: PropTypes.func
};

export default Product;