import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <section className="product-list">

      {props.inventory.map((item) => 
        <Product
          onProductClick={props.onProductClick}
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          key={item.id}
          id={item.id}
        />
      )}

    </section>
  );
}

ProductList.propTypes = {
  inventory: PropTypes.array,
  onProductClick: PropTypes.func
};

export default ProductList;