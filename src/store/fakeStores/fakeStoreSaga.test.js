
import { runSaga } from 'redux-saga';
import { handleGetProduct, fakeStoreSaga } from './fakeStoreSaga';
import { setProduct, getProudct, getProductFailure, getProductEmpty } from './fakeStoreSlice';
import { requestGetFakeStore } from '../request/fakestore';
import { fork } from 'redux-saga/effects';

// Mocking the API Request Function:
jest.mock('../request/fakestore', () => ({
  requestGetFakeStore: jest.fn(),
}));

describe('fakeStoreSaga', () => {


  // test.only('wrapped sagas return a task with a name referring to the forked saga', () => {
  //   const saga = fakeStoreSaga(fork);
  
  //   return expectSaga(saga)
  //     .returns('handleGetProduct')
  //     .run();
  // });
  
    it('should handle getProduct action', async() => {

    const responseData = { data: 'your fake data here' };
 // Mock the response of the axios request
    requestGetFakeStore.mockReturnValueOnce(responseData);
    // console.log("res= ",responseData)

    const dispatched = [];
    // This line initializes an empty array called dispatched.
    //  It's likely going to be used to store actions that are dispatched during the execution of the saga.
    await runSaga(
      // In this case, it's providing a dispatch function that pushes each dispatched action into the dispatched array.
      {
        dispatch: (action) => dispatched.push(action),
      },
      // A saga is a long-lived transaction that watches for specific actions and performs side effects when those actions are dispatched.
      handleGetProduct,

      getProudct()
    ).toPromise();
    // It converts the saga to a promise,
    // (waits for it to complete) and the await ensures that the execution waits for the saga to complete before moving on.
    // console.log("dispatch ",dispatched)
       // Assertions
    expect(requestGetFakeStore).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setProduct(responseData.data)]);
  });

  
  it('should handle getProduct action with an error', async () => {
    const error = new Error('API request failed');
    requestGetFakeStore.mockImplementationOnce(() => {
      throw error;
    });

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      handleGetProduct,
      getProudct()
    ).toPromise();

    console.log("dispatch ",dispatched)
    expect(requestGetFakeStore).toHaveBeenCalledTimes(1);
    
    // expect(dispatched).toEqual([]);
    expect(dispatched).toEqual([getProductFailure(error.message)]);
  });

  it('should handle getProduct action with an empty response', async () => {
    const emptyResponse = { data: [] };
    requestGetFakeStore.mockReturnValueOnce(emptyResponse);
  
    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => {
            console.log("dispatched action ",action);
            dispatched.push(action)
        },
      },
      handleGetProduct,
      getProudct()
    ).toPromise();
  
    expect(requestGetFakeStore).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([getProductEmpty()]);
  });
  
 
});








