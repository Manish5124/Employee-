import { call,put,takeLatest } from "redux-saga/effects";
import { requestGetFakeStore } from "../request/fakestore";
import { getProductEmpty, getProductFailure, getProudct, setProduct } from "./fakeStoreSlice";

export function* handleGetProduct(action){
    try {
        
        const response = yield call(requestGetFakeStore);
        
        if(response.data.length ===0)
           // Dispatch an action for empty response
            yield put(getProductEmpty());
        else
          // Dispatch the normal action for non-empty response
           yield put(setProduct(response.data));


    } catch (error) {
        console.log(error);
          // Dispatch an action for failure
        yield put(getProductFailure(error.message));
    }

}

export function* fakeStoreSaga(){
    yield takeLatest(getProudct.type,handleGetProduct)
}
