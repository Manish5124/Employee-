import { all,fork } from "redux-saga/effects";
import { fakeStoreSaga } from "./fakeStores/fakeStoreSaga";
// import { userSaga } from "./user/File/userSaga";

function* rootSaga(){
    yield all([
        fork(fakeStoreSaga),
        // fork(userSaga)
    ])
}

export default rootSaga;