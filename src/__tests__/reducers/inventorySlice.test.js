import inventoryReducer from './../../reducers/inventorySlice';

describe('inventoryReducer', () => {

  let action;
  const testProduct = {
    name: 'Test Product',
    description: 'It is testy',
    quantity: 100,
    id: 30
  };
  const testState = {
    1: {
      name: 'First',
      description: 'Is first.',
      quantity: 30,
      id: 1
    },
    30: {
      name: 'Test Product',
      description: 'It is testy',
      quantity: 100,
      id: 30
    }
  };

  test('Should return default state when no action type is given', ()=> {
    expect(inventoryReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully ADD a product to inventory state', () => {
    const { name, description, quantity, id } = testProduct;
    action = {
      type: 'ADD_PRODUCT',
      name: name,
      description: description,
      quantity: quantity,
      id: id
    };

    expect(inventoryReducer({}, action)).toEqual({ 
      [id]: {
      name: name,
      description: description,
      quantity: quantity,
      id: id
      }
    });
  });

  test('Should successfully DELETE a product from inventory state', () => {
    const { id } = testProduct;
    action = {
      type: 'DELETE_PRODUCT',
      id: id
    };

    expect(inventoryReducer(testState, action)).toEqual({
      1: {
        name: 'First',
        description: 'Is first.',
        quantity: 30,
        id: 1
      }
    });
  });
});