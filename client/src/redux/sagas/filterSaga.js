import {
  call, put, takeLatest, delay,
} from 'redux-saga/effects';
import { filterFavourites, setFavoriteProducts } from '../slices/favoriteProducts/favoriteProductsSlice';

function* filterSagaWorker(action) {
  console.log('23123123123', action);
  yield delay(1000);
  try {
    const filter = yield call(filterFavourites, action.payload);
    yield put(setFavoriteProducts(filter.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* filterSagaWatcher() {
  yield takeLatest('GET_FILTER', filterSagaWorker);
}

export default filterSagaWatcher;
