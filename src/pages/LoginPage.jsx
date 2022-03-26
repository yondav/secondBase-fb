/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useAuth from '../context/auth/firebase.actions.useAuth';

import { Spinner } from '../components';
import Card from '../components/layout/card';
import { Form } from '../components/forms';

const LoginPage = () => {
  const {
    state: { user },
    login,
  } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async data => {
    setLoading(true);
    try {
      await login(data);
      reset();
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => setLoading(false), 2550);
  };

  return (
    <>
      {!!user && !isLoading ? (
        <Navigate to='/admin/portal' />
      ) : (
        <Card.Base login={1}>
          {!isLoading ? (
            <Card.Body>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label group htmlFor='email'>
                    Email
                  </Form.Label>
                  <Form.Input id='email' ref={register} type='email' name='email' />
                </Form.Group>
                <Form.Group>
                  <Form.Label group htmlFor='password'>
                    Password
                  </Form.Label>
                  <Form.Input id='password' ref={register} type='password' name='password' />
                </Form.Group>
                <div tw='flex justify-end'>
                  <Form.Button purple>Login</Form.Button>
                </div>
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
