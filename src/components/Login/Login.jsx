import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePost = (values) => {
    props.loginValue(values);
    console.log('helo');
  };

  return (
    <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }} initialValues={{ remember: true }} onFinish={(e) => handlePost(e)}>
      <Form.Item
        label="Email"
        value={email}
        name="Email"
        onChange={(e) => setEmail(e.target.value)}
        rules={[{ required: true, message: 'Veuillez entrer un email!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        rules={[{ required: true, message: 'Veuillez entrer un mot de passe!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox> Se souvenir </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="submit" htmlType="submit">
          Connexion
        </Button>
      </Form.Item>
    </Form>
  );
}
