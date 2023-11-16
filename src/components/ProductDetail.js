import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {

  const { product, onClickingDelete, onClickingEdit } = props;

  return (
    <section className="product-detail">

      <button onClick={props.onClickingBuy}>Buy Item</button>
      <button onClick={props.onClickingRestock}>Restock Item</button>

      <div className="product-info">
        <h3>{product.name}</h3>
        <h4>{product.description}</h4>
        <h4>Quantity: {product.quantity}</h4>
      </div>

      {/* <button>Buy Item</button> */}

      <div className="crud-buttons">
        <button onClick={onClickingEdit}>Edit Item</button>
        <button onClick={() => onClickingDelete(product.id)}>Remove Item</button>
      </div>

    </section>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default ProductDetail;