// import {Actions} from "redux";
import { TopicsState } from "./contracts/state";

export enum TopicsActionTypes {
  SET_TOPICS = "topics/SET_TOPICS",
  FETCH_TOPICS = "topics/FETCH_TOPICS"
}

export const setTopics = (payload: TopicsState['topics']) => ({
  type: TopicsActionTypes.SET_TOPICS,
  payload
})

export const fetchTopics = () => ({
  type: TopicsActionTypes.FETCH_TOPICS
})