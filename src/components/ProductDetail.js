import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {

  const { product, onClickingDelete, onClickingEdit, onQuantityChange } = props;

  function handleBuyingProduct() {
    const updatedProduct = {
      ...product,
      quantity: (product.quantity <= 0) ? 0 : product.quantity - 1
    };
    onQuantityChange(updatedProduct);
  }

  function handleRestockingProduct() {
    const updatedProduct = {
      ...product,
      quantity: product.quantity + 1
    };

    onQuantityChange(updatedProduct);
  }

  return (
    <section className="product-detail">

      <button onClick={handleBuyingProduct}>Buy Item</button>
      <button onClick={handleRestockingProduct}>Restock Item</button>

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