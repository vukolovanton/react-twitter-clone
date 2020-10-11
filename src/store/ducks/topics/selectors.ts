import { createSelector } from "reselect";
import { RootState } from '../../store';
import { TopicsState } from './contracts/state';

export const selectTopics = (state: RootState) : TopicsState => state.topics;

export const selectTopicsItems = createSelector(selectTopics, topics => topics.topics)