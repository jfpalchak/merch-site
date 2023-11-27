import { testInventory } from "../components/test-inventory";

const reducer = (state = testInventory, action) => {
  const { name, description, quantity, id } = action;

  switch (action.type) {
    case 'ADD_PRODUCT':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          id: id
        }
      });
    case 'DELETE_PRODUCT':
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;