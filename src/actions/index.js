import * as c from './ActionTypes';

export const addProduct = (product) => {
  const { name, description, quantity, id } = product;
  return {
    type: c.ADD_PRODUCT,
    name,
    description,
    quantity,
    id    
  }
}

export const deleteProduct = (id) => {
  return {
    type: c.DELETE_PRODUCT,
    id
  }
}