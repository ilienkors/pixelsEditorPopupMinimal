interface IPixelDictionariesPresetResponse {
  id: number;
  preset_name: string;
  platform_type: string;
}

export interface IPixelDictionariesResponse {
  result: {
    types: Array<string>;
    presets: Array<IPixelDictionariesPresetResponse>;
  };
}

export interface IFormattedPayloadPostPixelMinimal {
  name: string;
  type: string;
  preset: number;
  channelId: number;
}
