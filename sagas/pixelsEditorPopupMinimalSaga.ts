import { all, takeLatest, call, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { handleApiCall } from '../../core/sagas/apiSagaHelpers';

import { showModal } from '../../modals/ducks';
import { PIXELS_POPUP_MINIMAL_ACTION_SUCCESS } from '../../modals/config/modals';

import {
  getTypesPresetsListApi,
  postPixelMinimalApi,
} from '../api/pixelsEditorPopupMinimalApi';

import {
  initializePixelsEditorPopupMinimal,
  postPixelMinimal,
  setLoadingStatus,
} from '../ducks/pixelsEditorPopupMinimalDuck';
import { mapFormattedPostPixelMinimalPayload } from '../mappers/pixelsEditorPopupMinimalApiMapper';
import { IFormattedPayloadPostPixelMinimal } from '../typing/api';

export function* initializePixelsEditorPopupMinimalSaga() {
  yield put(setLoadingStatus(true));

  yield call(handleApiCall, getTypesPresetsListApi());

  yield put(setLoadingStatus(false));
}

export function* postPixelMinimalSaga({
  payload: { values, channelName },
}: PayloadAction<{
  values: IFormattedPayloadPostPixelMinimal;
  channelName: string;
}>) {
  yield put(setLoadingStatus(true));

  const formattedPayload = mapFormattedPostPixelMinimalPayload(values);

  yield call(handleApiCall, postPixelMinimalApi({ payload: formattedPayload }));

  yield put(setLoadingStatus(false));

  yield put(
    showModal({
      ...PIXELS_POPUP_MINIMAL_ACTION_SUCCESS,
      channelName,
    }),
  );
}

export function* pixelsEditorPopupMinimalFlowSaga() {
  yield all([
    takeLatest(
      initializePixelsEditorPopupMinimal,
      initializePixelsEditorPopupMinimalSaga,
    ),
    takeLatest(postPixelMinimal, postPixelMinimalSaga),
  ]);
}
