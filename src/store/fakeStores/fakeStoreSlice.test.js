import React from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import fakeStoreSlice, {setProduct,getProudct, getProductFailure,getProductEmpty} from './fakeStoreSlice';
  

describe('fakeStore reducer', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should handle setProduct action', async () => {
    const prevState = { product: [], error: null };
    const action = fakeStoreSlice.setProduct([{ id: 1, name: 'Product 1' }]);

    mock.onGet('https://fakestoreapi.com/products/1').reply(200, [{ id: 1, name: 'Product 1' }]);

    const newState = await fakeStoreSlice.default(prevState, action);

    expect(newState).toEqual({ product: [{ id: 1, name: 'Product 1' }], error: null });
  });

});



























// import React from 'react';
// const axios = require('axios');
// const MockAdapter = require('axios-mock-adapter');
// import fakeStoreSlice, {setProduct,getProudct, getProductFailure,getProductEmpty} from './fakeStoreSlice';
  
//   describe('fakeStore reducer', () => {
  
  
//     let mock;

//     beforeEach(() => {
//       mock = new MockAdapter(axios);
//     });
  
//     afterEach(() => {
//       mock.restore();
//     });
  
//     it('should handle setProduct action', async () => {
//       const prevState = { product: [], error: null };
//       const action = setProduct([{ id: 1, name: 'Product 1' }]);
  
//       mock.onGet('https://fakestoreapi.com/products/1').reply(200, [{ id: 1, name: 'Product 1' }]);
  
//       const newState = await fakeStoreSlice(prevState, action);
  
//       expect(newState).toEqual({ product: [{ id: 1, name: 'Product 1' }], error: null });
//     });
  
  
    // it('should handle setProduct action', () => {
    //   const prevState = { product: [], error: null };
    //   const action = setProduct([{ id: 1, name: 'Product 1' }]);
    //   const newState = fakeStoreSlice(prevState, action);
    //   expect(newState).toEqual({ product: [{ id: 1, name: 'Product 1' }], error: null });
    // });
  
    // it('should handle getProudct action', () => {
    //   const prevState = { product: [], error: null };
    //   const action = getProudct();
    //   const newState = fakeStoreSlice(prevState, action);
    //   // Since getProudct returns the current state, the newState should be the same as prevState
    //   expect(newState).toEqual(prevState);
    // });
  
    // it('should handle getProductFailure action', () => {
    //   const prevState = { product: [], error: null };
    //   const action = getProductFailure('Error message');
    //   const newState = fakeStoreSlice(prevState, action);
    //   expect(newState).toEqual({ product: [], error: 'Error message' });
    // });
  
    // it('should handle getProductEmpty action', () => {
    //   const prevState = { product: [{ id: 1, name: 'Product 1' }], error: 'Error message' };
    //   const action = getProductEmpty();
    //   const newState = fakeStoreSlice(prevState, action);
    //   expect(newState).toEqual({ product: [], error: null });
    // });

    // it("should spy on dispatch method", () => {
    //   const dispatchMock = jest.fn();
    //   const mockStore = { dispatch: dispatchMock };
  
    //   // Spy on the dispatch method
    //   const dispatchSpy = jest.spyOn(mockStore, "dispatch");
  
    //   // Dispatch an action
    //   mockStore.dispatch(setProduct(["product1", "product2"]));
  
    //   // Check if dispatch was called with the expected arguments
    //   expect(dispatchSpy).toHaveBeenCalledWith({
    //     type: "fakeStore/setProduct",
    //     payload: ["product1", "product2"],
    //   });
  
    //   // Restore the original implementation of dispatch after the test
    //   dispatchSpy.mockRestore();
    // });
// -------------------------------
    // it('should set product', () => {
   
    //   const dispatchMock = jest.fn();
  
    //   const initialState = { product: [], error: null };
  
    //   const action = setProduct(['product1', 'product2']);
  
    //   fakeStoreSlice(initialState, action, dispatchMock);

    //   expect(dispatchMock).toHaveBeenCalledTimes(1);
    // });
  // });
  
