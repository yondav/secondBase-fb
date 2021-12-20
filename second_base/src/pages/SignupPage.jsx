import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useAuth from '../context/auth/firebase.actions.useAuth';
import { Card, Grid, Form, Button } from '../styles';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async data => {
    let newUser;
    try {
      newUser = await signup(data);
      reset();
    } catch (err) {
      console.log(err);
    }

    if (newUser) {
      navigate('/admin/portal');
    }
  };
  return (
    <Card.Base login>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid.Container>
          <Grid.Col split pad>
            <Form.Group>
              <Form.Label group htmlFor='first_name'>
                First Name
              </Form.Label>
              <Form.Input id='first_name' ref={register} type='text' name='first_name' />
            </Form.Group>
          </Grid.Col>
          <Grid.Col split pad>
            <Form.Group>
              <Form.Label group htmlFor='last_name'>
                Last Name
              </Form.Label>
              <Form.Input id='last_name' ref={register} type='text' name='last_name' />
            </Form.Group>
          </Grid.Col>
          <Grid.Col split pad>
            <Form.Group>
              <Form.Label group htmlFor='email'>
                Email
              </Form.Label>
              <Form.Input id='email' ref={register} type='email' name='email' />
            </Form.Group>
          </Grid.Col>
          <Grid.Col split pad>
            <Form.Group>
              <Form.Label group htmlFor='password'>
                Password
              </Form.Label>
              <Form.Input id='password' ref={register} type='password' name='password' />
            </Form.Group>
          </Grid.Col>
        </Grid.Container>
        <Button type='submit' purple>
          Sign up
        </Button>
      </form>
    </Card.Base>
  );
};

export default SignUpPage;
