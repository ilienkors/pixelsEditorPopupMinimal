import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';
import { Form } from 'antd';

import { ModalLoaderStub } from '../../../../components/ModalLoaderStub';
import { FormButtonsAnt } from '../../../../components/FormButtonsAnt';

import {
  initializePixelsEditorPopupMinimal,
  postPixelMinimal,
  selectPixelsEditorPopupMinimalLoadingStatus,
} from '../../ducks/pixelsEditorPopupMinimalDuck';

import CustomInputName from '../CustomInputName';
import CustomSelectWithSearchType from '../CustomSelectWithSearchType';
import CustomSelectWithSearchPreset from '../CustomSelectWithSearchPreset';

import { IFormattedPayloadPostPixelMinimal } from '../../typing/api';

import styles from './pixelsEditorPopupMinimal.module.scss';

interface IProps {
  hide: () => void;
  options: {
    channelId: number;
    channelName: string;
  };
}

const PixelsEditorPopupMinimal = (props: IProps) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const {
    hide: hideModal,
    options: { channelId, channelName },
  } = props;

  const isLoading = useSelector(selectPixelsEditorPopupMinimalLoadingStatus);

  useMount(() => {
    dispatch(initializePixelsEditorPopupMinimal());
  });

  const onSubmit = useCallback(
    (values: Omit<IFormattedPayloadPostPixelMinimal, 'channelId'>) => {
      if (!isLoading) {
        dispatch(
          postPixelMinimal({ values: { ...values, channelId }, channelName }),
        );
      }
    },
    [isLoading, dispatch, channelId, channelName],
  );

  return (
    <>
      {isLoading && <ModalLoaderStub />}
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        labelAlign="left"
        className={styles.container}
        onFinish={onSubmit}
      >
        <h2 className={styles.popupTitle}>Adding pixel to channel</h2>
        <CustomInputName />
        <CustomSelectWithSearchType />
        <CustomSelectWithSearchPreset />
        <FormButtonsAnt
          onCancel={hideModal}
          onSubmit={form.submit}
          submitText="Add pixel"
        />
      </Form>
    </>
  );
};

export default PixelsEditorPopupMinimal;
