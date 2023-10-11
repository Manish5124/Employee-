import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers,  configureStore} from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
// import todoReducer from "./todoSlice";
// import userReducer from "./userFile/userSlice"
import fakeStoreReducer from './fakeStores/fakeStoreSlice'

const reducer = combineReducers({
    // data: todoReducer,
    // user:userReducer,
    product:fakeStoreReducer
  })


  const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware:[sagaMiddleware]

});

sagaMiddleware.run(rootSaga);

export default store;
