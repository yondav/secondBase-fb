import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useAuth from '../../firebase/auth/firebase.useAuth';

import { Card, Form, Button } from '../../styles';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async data => {
    let user;
    setLoading(true);
    try {
      user = await login(data);
      reset();
    } catch (err) {
      console.log(err);
    }

    if (user) {
      navigate('/admin/portal');
    } else {
      setLoading(false);
    }
  };

  return (
    <Card.Base login>
      <Card.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label group htmlFor='email'>
              Email
            </Form.Label>
            <Form.Input ref={register} type='email' name='email' />
          </Form.Group>
          <Form.Group>
            <Form.Label group htmlFor='password'>
              Password
            </Form.Label>
            <Form.Input ref={register} type='password' name='password' />
          </Form.Group>
          <Button purple>Login</Button>
        </form>
      </Card.Body>
    </Card.Base>
  );
};

export default LoginPage;
