import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

export default function Login(props) {
  const onFinish = (values) => {
    props.loginValue(values);
  };

  return (
    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item label="Email" name="Email" rules={[{ required: true, message: 'Veuillez entrer un email!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Veuillez entrer un mot de passe!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox> Se souvenir </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Connexion
        </Button>
      </Form.Item>
    </Form>
  );
}
