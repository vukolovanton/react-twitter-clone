// import { createSelector } from "reselect";
import { RootState } from "../../store";
import { TweetState } from "./contracts/state";

export const selectTweet = (state: RootState) : TweetState => state.tweet;

// export const selectTweetData = createSelector(selectTweet, tweets => tweets.data)
export const selectTweetData = (state: RootState) => selectTweet(state).data;

export const selectLoadingState = (state: RootState) => selectTweet(state).loadingState;