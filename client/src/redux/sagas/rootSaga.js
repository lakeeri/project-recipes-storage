import { all } from 'redux-saga/effects';
import filterSagaWatcher from './filterSaga';

export default function* rootSaga() {
  yield all([
    filterSagaWatcher(),
  ]);
}
