import React from 'react';
import { useSelector } from 'react-redux';

import FormItemSelectWithSearch from '../../../../components/FormItemSelectWithSearch';
import { selectPixelsEditorPopupMinimalTypes } from '../../ducks/pixelsEditorPopupMinimalDuck';

const CustomSelectWithSearchType = () => {
  const typesList = useSelector(selectPixelsEditorPopupMinimalTypes);

  return (
    <FormItemSelectWithSearch label="Type" name="type" entities={typesList} />
  );
};

export default CustomSelectWithSearchType;
