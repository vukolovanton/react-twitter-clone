import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchTweetActionInterface, setTweet, setTweetLoadingState, TweetActionsType } from "./actions"
import { TweetsApi } from '../../../utils/tweetsApi'
import { LoadingState } from './contracts/state';

export function* fetchTweetRequest({payload: id}: FetchTweetActionInterface) {
  console.log(id, 'id')
  try {
    const data = yield call(TweetsApi.fetchTweet, id)
    yield put(setTweet(data[0]));
  } catch(e) {
    yield put(setTweetLoadingState(LoadingState.ERROR))
    console.log(e)
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActionsType.FETCH_TWEET, fetchTweetRequest)
}