import { call, put, takeLatest } from 'redux-saga/effects';
import { addTweet, FetchAddTweetActionInterface, setAddFormState, setTweets, setTweetsLoadingState, TweetsActionsType } from "./actionCreators"
import { TweetsApi } from '../../../utils/tweetsApi'
import { AddFormState, LoadingState, Tweet } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const data = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(data));
  } catch(e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
    console.log(e)
  }
}

export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {

  try {
    const data: Tweet = {
      id: Math.random().toString(36).substr(2),
      text: payload,
      user: {
        fullname: 'Sender',
        username: '@adam',
        avatarUrl: "https://source.unsplash.com/random/100x100?5"
      },
    }

    const tweet = yield call(TweetsApi.addTweet, data)
    yield put(addTweet(tweet))
  } catch(e) {
    console.log(e)
    yield put(setAddFormState(AddFormState.ERROR))
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}