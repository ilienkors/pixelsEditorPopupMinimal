export interface IInitialState {
  loadingStatus: boolean;
  types: Array<{ id: string; name: string }>;
  presets: Array<{ id: number; name: string }>;
}

export const statePath = 'pixelsEditorPopupMinimal';
