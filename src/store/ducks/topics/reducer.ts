import produce, { Draft } from "immer";
import { TopicsActionTypes } from './actions';
import { TopicsState } from './contracts/state';

const initialState: TopicsState = {
  topics: [],
}

export const topicsReducer = produce((draft: Draft<TopicsState>, action ) => {
  switch (action.type) {
    case TopicsActionTypes.SET_TOPICS:
      draft.topics = action.payload;
      break;

    default:
      break;
  }
}, initialState)