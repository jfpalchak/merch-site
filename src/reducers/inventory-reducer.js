import { testInventory } from "../components/test-inventory";
import * as c from './../actions/ActionTypes';

const reducer = (state = testInventory, action) => {
  const { name, description, quantity, id } = action;

  switch (action.type) {
    case c.ADD_PRODUCT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          id: id
        }
      });
    case c.DELETE_PRODUCT:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};

export default reducer;