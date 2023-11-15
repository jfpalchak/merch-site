import React from "react";
import ProductList from "./ProductList";
import { testInventory } from "./test-inventory";

class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainInventory: testInventory,
      formVisible: false,
      editing: false,
      currentItem: null
    };
  }


  render() {

    return (
      <React.Fragment>
        <ProductList
          inventory={this.state.mainInventory}
        />
      </React.Fragment>
    );
  }
}

export default ProductControl;