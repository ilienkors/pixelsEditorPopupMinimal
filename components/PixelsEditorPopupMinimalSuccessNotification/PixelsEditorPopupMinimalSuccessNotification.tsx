import React, { useEffect } from 'react';
import { notification } from 'antd';

import styles from './pixelsEditorPopupMinimalSuccessNotification.module.scss';

interface IProps {
  hide: () => void;
  options: {
    channelName: string;
  };
}

const PixelsEditorPopupMinimalSuccessNotification = ({
  options: { channelName },
  hide: hideModal,
}: IProps) => {
  useEffect(() => {
    const key = 'pixelSuccess';

    notification.success({
      message: (
        <p className={styles.text}>
          Pixel has been added to channel&nbsp;
          <span className={styles.bold}>{channelName}</span> successfully.&nbsp;
        </p>
      ),
      key,
    });
  }, [channelName]);

  return null;
};

export default PixelsEditorPopupMinimalSuccessNotification;
