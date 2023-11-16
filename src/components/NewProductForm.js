import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableForm from "./ReusableForm";

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
    <ReusableForm 
      formSubmissionHandler={handleFormSubmission}
      buttonText="Submit"
    />
  );
}

NewProductForm.propTypes = {
  onFormSubmission: PropTypes.func
};

export default NewProductForm;