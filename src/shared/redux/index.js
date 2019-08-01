import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { tasksReducer, tasksSagas } from "./todo";
import createSagaMiddleware from "redux-saga";
import { all } from '@redux-saga/core/effects';


const metaReducers = combineReducers({
    todo: tasksReducer
  });


  function* rootSaga() {
    yield all([...tasksSagas]);
  }


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    metaReducers,
    composeEnhancers(applyMiddleware(...middlewares))
  );


sagaMiddleware.run(rootSaga);

export default store;