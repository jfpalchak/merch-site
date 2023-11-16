import React from "react";
import "./ProductControl.css";
import ProductList from "./ProductList";
import { testInventory } from "./test-inventory";
import NewProductForm from "./NewProductForm";

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

  // handle submission of new product form and add the new item to the inventory list,
  // then reset formVisible state to go back to the render of our product list
  handleAddNewProduct = (newProduct) => {
    const updatedInventory = this.state.mainInventory.concat(newProduct);
    this.setState({
      mainInventory: updatedInventory, 
      formVisible: false
    });
  }

  // handle clicking on a specific item to render its details
  // set currentItem state to that product
  handleProductSelection = (id) => {
    const selectedItem = this.state.mainInventory.filter(item => item.id === id)[0];

    this.setState({
      currentItem: selectedItem
    });
  }

  render() {
    let buttonText = null;
    let visibleComponent = null;

    if (this.state.currentItem != null) {
      visibleComponent = <ProductDetail 
                            product={this.state.currentItem}/>
    } else if (this.state.formVisible) {
      visibleComponent = <NewProductForm
                            onFormSubmission={this.handleAddNewProduct} />
      buttonText = "Cancel";
    } else {
      visibleComponent = <ProductList
                            inventory={this.state.mainInventory} 
                            onProductClick={this.handleProductSelection}/>    
      buttonText = "Add New Product";
    }

    return (
      <main>

        {visibleComponent}
        <button onClick={this.handleClick}>{buttonText}</button>

      </main>
    );
  }
}

export default ProductControl;