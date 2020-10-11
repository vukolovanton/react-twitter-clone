import { all } from 'redux-saga/effects';
import { tweetsSaga } from './ducks/tweets/saga';
import { topicsSaga } from './ducks/topics/saga';

export default function* rootSaga() {
  yield all([tweetsSaga(), topicsSaga()])
}