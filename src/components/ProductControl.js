import React from "react";
import ProductList from "./ProductList";

class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainInventory: [],
      formVisible: false,
      editing: false,
      currentItem: null
    };
  }


  render() {

    return (
      <React.Fragment>
        <ProductList />
      </React.Fragment>
    );
  }
}

export default ProductControl;