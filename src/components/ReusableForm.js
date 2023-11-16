import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {

  return (
    <form onSubmit={props.formSubmissionHandler} className="new-product-form">
      <input 
        type="text" 
        name="name" 
        placeholder="Enter product name." 
      />
      <br/>
      <textarea 
        name="description" 
        placeholder="Enter product description" 
      />
      <br/>
      <input 
        type="number"
        name="quantity"
        placeholder="Enter product quantity."
      />
      <br/>
      <button type="submit">{props.buttonText}</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;