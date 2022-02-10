import React from 'react';
import { Form, Input } from 'antd';

const CustomInputName = () => {
  return (
    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          min: 2,
          message: 'name is required',
        },
      ]}
    >
      <Input placeholder="Type" data-e2e="name-input" />
    </Form.Item>
  );
};

export default CustomInputName;
