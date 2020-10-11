import { call, put, takeLatest } from 'redux-saga/effects';
import { setTopics, TopicsActionTypes } from './actions' ;
import { TopicsApi } from '../../../utils/topicsApi';

export function* fetchTopicsReports() {
  try {
    const data = yield call(TopicsApi.fetchTopics)
    yield put(setTopics(data))
  } catch(e) {
    console.log(e)
  }
}

export function* topicsSaga() {
  yield takeLatest(TopicsActionTypes.FETCH_TOPICS, fetchTopicsReports)
}