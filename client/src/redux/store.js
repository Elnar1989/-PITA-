import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// import { rootSaga } from "./sagas/rootSaga";
import { initialState } from "./initialState";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";

// const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

// sagaMiddleware.run(rootSaga);

export default store;
