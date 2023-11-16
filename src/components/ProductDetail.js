import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  const { product } = props;

  return (
    <section className="product-detail">
      <h3>{product.name}</h3>
      <h4>{product.description}</h4>
      <h4>Quantity: {product.quantity}</h4>
    </section>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object
};

export default ProductDetail;