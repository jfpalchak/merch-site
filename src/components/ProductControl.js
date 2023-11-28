import React from "react";
import "./ProductControl.css";
import ProductList from "./ProductList";
import { testInventory } from "./test-inventory";
import NewProductForm from "./NewProductForm";
import ProductDetail from "./ProductDetail";
import EditProductForm from "./EditProductForm";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as a from './../actions/index';

class ProductControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // mainInventory: testInventory,
      formVisible: false,
      editing: false,
      currentItem: null
    };
  }

  // handle click event to toggle whether an add item form renders or not
  handleFormClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  // handle click event to toggle currentItem state,
  // as well as current editing state
  handleDetailButton = () => {
    this.setState({
      currentItem: null,
      editing: false
    });
  }

  // handle submission of new product form and add the new item to the inventory list,
  // then reset formVisible state to go back to the render of our product list
  handleAddNewProduct = (newProduct) => {
    const { dispatch } = this.props;
    const action = a.addProduct(newProduct);

    dispatch(action);

    this.setState({
      formVisible: false
    });
  }

  // handle clicking on a specific item to render its details
  // set currentItem state to that product
  handleProductSelection = (id) => {
    const selectedItem = this.props.mainInventory[id];
    this.setState({
      currentItem: selectedItem
    });
  }

  // handle removing the specific item from the inventory,
  // set currentItem to null and return to list
  handleDeleteProduct = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteProduct(id);

    dispatch(action);

    this.setState({
      currentItem: null
    })
  }

  // handle clicking edit button to render edit product form
  handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  // handle updating the inventory with the new product details,
  // then reset currentItem state to null and editing state to false,
  // return to product list
  handleUpdatingProduct = (updatedProduct) => {
    const { dispatch } = this.props;
    const action = a.addProduct(updatedProduct);

    dispatch(action);

    this.setState({
      currentItem: updatedProduct,
      editing: false
    });
  }

  render() {
    let buttonText = null;
    let visibleComponent = null;
    let buttonHandler = this.handleFormClick;

    if (this.state.editing) {
      visibleComponent = <EditProductForm 
                            product={this.state.currentItem}
                            onFormSubmission={this.handleUpdatingProduct}/>
      buttonText = "Cancel";
      buttonHandler = this.handleDetailButton;
    } else if (this.state.currentItem != null) {
      visibleComponent = <ProductDetail 
                            product={this.state.currentItem}
                            onQuantityChange={this.handleUpdatingProduct}
                            onClickingEdit={this.handleEditClick}
                            onClickingDelete={this.handleDeleteProduct} />
      buttonText = "Return";
      buttonHandler = this.handleDetailButton;
    } else if (this.state.formVisible) {
      visibleComponent = <NewProductForm
                            onFormSubmission={this.handleAddNewProduct} />
      buttonText = "Cancel";
    } else {
      visibleComponent = <ProductList
                            inventory={this.props.mainInventory} 
                            onProductClick={this.handleProductSelection}/>    
      buttonText = "Add New Product";
    }

    return (
      <main>

        {visibleComponent}
        <button onClick={buttonHandler}>{buttonText}</button>

      </main>
    );
  }
}

ProductControl.propTypes = {
  mainInventory: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    mainInventory: state
  }
};

ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;