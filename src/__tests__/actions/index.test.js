import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('Merch Site Actions', () => {

  test('addProduct should create a ADD_PRODUCT action', () => {
    expect(actions.addProduct({
      name: 'Test Product',
      description: 'A test.',
      quantity: 100,
      id: 1
    })).toEqual({
      type: c.ADD_PRODUCT,
      name: 'Test Product',
      description: 'A test.',
      quantity: 100,
      id: 1
    });
  });

  test('deleteProduct should create a DELETE_PRODUCT action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: c.DELETE_PRODUCT,
      id: 1
    });
  });
});