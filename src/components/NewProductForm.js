import React from "react";

function NewProductForm() {

  const handleFormSubmission = (event) => {
    event.preventDefault();

    // create new product item and add to list!
  }

  return (
    <React.Fragment>
      <form className="new-product-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Enter product name." 
        />
        <textarea 
          type="text" 
          name="description" 
          placeholder="Enter product description" 
        />
        <input 
          type="number"
          name="quantity"
          placeholder="Enter product quantity."
        />
        <button onClick={handleFormSubmission}>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default NewProductForm;