import {
  getTypesPresetsListRequest,
  getTypesPresetsListRequestSuccess,
  postPixelMinimalRequest,
  postPixelMinimalRequestSuccess,
} from '../ducks/pixelsEditorPopupMinimalDuck';

import { mapTypesPresetsData } from '../mappers/pixelsEditorPopupMinimalApiMapper';

import { APICallInterface } from '../../core/typing/apiTypes';

export const getTypesPresetsListApi = (): APICallInterface => ({
  types: [
    getTypesPresetsListRequest.type,
    getTypesPresetsListRequestSuccess.type,
  ],
  params: {
    method: 'get',
    url: 'api/pixel/dictionaries',
  },
  responseMapper: mapTypesPresetsData,
});

export const postPixelMinimalApi = ({
  payload,
}: {
  payload: Record<string, unknown>;
}): APICallInterface => ({
  types: [postPixelMinimalRequest.type, postPixelMinimalRequestSuccess.type],
  params: {
    method: 'post',
    url: 'api/pixel',
    payload,
  },
});
