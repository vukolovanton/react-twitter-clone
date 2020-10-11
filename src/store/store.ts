import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import { TopicsState } from "./ducks/topics/contracts/state";
import { TweetsState } from "./ducks/tweets/contracts/state";
import { rootReducer } from "./rootReducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState,
  topics: TopicsState
}

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);