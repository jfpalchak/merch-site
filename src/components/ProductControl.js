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

  // handle click event to toggle whether an add item form renders or not
  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render() {
    let text = null;

    if (this.state.formVisible) {
      text = "Form is visible.";
    } else {
      text = "Form is not visible.";
    }

    return (
      <React.Fragment>
        <ProductList
          inventory={this.state.mainInventory}
        />

        <button onClick={this.handleClick}>{text}</button>
      </React.Fragment>
    );
  }
}

export default ProductControl;