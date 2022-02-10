import {
  createSelector,
  createSlice,
  PayloadAction,
  createAction,
} from '@reduxjs/toolkit';

import { StoreState } from '../../core/typing/reducersType';
import { IInitialState } from '../typing/duck';
import { IFormattedPayloadPostPixelMinimal } from '../typing/api';

const initialState: IInitialState = {
  loadingStatus: true,
  types: [],
  presets: [],
};

const pixelsEditorPopupMinimalSlice = createSlice({
  name: 'pixelsEditorPopupMinimal',
  initialState,
  reducers: {
    initializePixelsEditorPopupMinimal() {},
    setLoadingStatus: (
      draft,
      { payload: loadingStatus }: PayloadAction<boolean>,
    ) => {
      draft.loadingStatus = loadingStatus;
    },
    getTypesPresetsListRequest() {},
    getTypesPresetsListRequestSuccess: (
      draft,
      {
        payload: { response },
      }: PayloadAction<{
        response: {
          types: IInitialState['types'];
          presets: IInitialState['presets'];
        };
      }>,
    ) => {
      draft.types = response.types;
      draft.presets = response.presets;
    },
    postPixelMinimalRequest() {},
    postPixelMinimalRequestSuccess() {},
  },
});

export const pixelsEditorPopupMinimalReducer =
  pixelsEditorPopupMinimalSlice.reducer;

export const {
  initializePixelsEditorPopupMinimal,
  setLoadingStatus,
  getTypesPresetsListRequest,
  getTypesPresetsListRequestSuccess,
  postPixelMinimalRequest,
  postPixelMinimalRequestSuccess,
} = pixelsEditorPopupMinimalSlice.actions;

export const postPixelMinimal = createAction<{
  values: IFormattedPayloadPostPixelMinimal;
  channelName: string;
}>('pixelsEditorPopupMinimal/postPixelMinimal');

const selectPixelsEditorPopupMinimal = (state: StoreState) =>
  state.pixelsEditorPopupMinimal;

export const selectPixelsEditorPopupMinimalLoadingStatus = createSelector(
  selectPixelsEditorPopupMinimal,
  (data) => data.loadingStatus,
);

export const selectPixelsEditorPopupMinimalTypes = createSelector(
  selectPixelsEditorPopupMinimal,
  (data) => data.types,
);

export const selectPixelsEditorPopupMinimalPresets = createSelector(
  selectPixelsEditorPopupMinimal,
  (data) => data.presets,
);
