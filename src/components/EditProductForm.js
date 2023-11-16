import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditProductForm(props) {

  const { product } = props;

  function handleFormSubmission(event) {
    event.preventDefault();

    props.onFormSubmission({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: product.id
    });
  }

  return (
    <ReusableForm 
      formSubmissionHandler={handleFormSubmission}
      buttonText="Update"
    />
  );
}

EditProductForm.propTypes = {
  product: PropTypes.object,
  onFormSubmission: PropTypes.func
};

export default EditProductForm;