// eslint-disable-next-line import/no-extraneous-dependencies
import { all } from 'redux-saga/effects';

import example from './example/sagas';

export default function* rootSaga() {
  return yield all([example]);
}
