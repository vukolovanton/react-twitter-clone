import { call, put, takeLatest } from 'redux-saga/effects';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from "./actionCreators"
import { TweetsApi } from '../../../utils/tweetsApi'
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    const data = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(data));
  } catch(e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR))
    console.log(e)
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}