import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  return (
    <React.Fragment>
      {props.inventory.map((item) => 
        <Product
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          key={item.id}
          id={item.id}
        />
      )}
      <Product />
    </React.Fragment>
  );
}

ProductList.propTypes = {
  inventory: PropTypes.array
};

export default ProductList;