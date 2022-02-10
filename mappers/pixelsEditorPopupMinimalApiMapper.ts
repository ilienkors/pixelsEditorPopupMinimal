import {
  IFormattedPayloadPostPixelMinimal,
  IPixelDictionariesResponse,
} from '../typing/api';

export const mapTypesPresetsData = (props: IPixelDictionariesResponse) => {
  const {
    result: { types, presets },
  } = props;

  const mappedTypes = types.map((type) => ({ id: type, name: type }));

  const mappedPresets = presets.map((preset) => ({
    id: preset.id,
    name: preset.preset_name,
  }));

  return {
    types: mappedTypes,
    presets: mappedPresets,
  };
};

export const mapFormattedPostPixelMinimalPayload = ({
  name,
  type,
  preset,
  channelId,
}: IFormattedPayloadPostPixelMinimal) => {
  return {
    name,
    type,
    accuracy: 100,
    affiliation: 'Channel',
    origins: [
      {
        channel: {
          id: channelId,
        },
      },
    ],
    preset: {
      id: preset,
    },
  };
};
