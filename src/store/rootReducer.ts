import { combineReducers } from "redux";
import { topicsReducer } from "./ducks/topics/reducer";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { tweetReducer } from "./ducks/tweet/reducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  topics: topicsReducer,
});
