import { createSelector } from "reselect";
import { RootState } from "../../store";
import { AddFormState, TweetsState } from "./contracts/state";

export const selectTweets = (state: RootState) : TweetsState => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)

export const selectLoadingState = (state: RootState) => selectTweets(state).loadingState;

export const selectAddFormState = (state: RootState): AddFormState => selectTweets(state).addFormState;