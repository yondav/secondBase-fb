import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useAuth from '../../context/auth/firebase.actions.useAuth';

import Spinner from '../../components/spinner';
import { Card, Form, Button } from '../../styles';

const LoginPage = () => {
  const {
    state: { user },
    login,
  } = useAuth();
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

    setTimeout(() => setLoading(false), 2550);
  };

  useEffect(() => console.log(user), [user]);
  return (
    <>
      {!!user && !isLoading ? (
        <Navigate to='/admin/portal' />
      ) : (
        <Card.Base login>
          {!isLoading ? (
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
          ) : (
            <Spinner />
          )}
        </Card.Base>
      )}
    </>
  );
};

export default LoginPage;
