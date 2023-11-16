import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewProductForm(props) {

  function handleFormSubmission(event) {
    event.preventDefault();

    // create new product item and add to list using prop method
    // takes product object as an argument:
    props.onFormSubmission({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleFormSubmission} className="new-product-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Enter product name." 
        />
        <textarea 
          name="description" 
          placeholder="Enter product description" 
        />
        <input 
          type="number"
          name="quantity"
          placeholder="Enter product quantity."
        />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onFormSubmission: PropTypes.func
};

export default NewProductForm;