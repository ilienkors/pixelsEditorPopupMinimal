import React from 'react';
import { useSelector } from 'react-redux';

import { selectPixelsEditorPopupMinimalPresets } from '../../ducks/pixelsEditorPopupMinimalDuck';

import FormItemSelectWithSearch from '../../../../components/FormItemSelectWithSearch';

const CustomSelectWithSearchPreset = () => {
  const presetsList = useSelector(selectPixelsEditorPopupMinimalPresets);

  return (
    <FormItemSelectWithSearch
      label="Pixel preset"
      name="preset"
      entities={presetsList}
    />
  );
};

export default CustomSelectWithSearchPreset;
