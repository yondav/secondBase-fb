import React from 'react';
import { Card, Form, Button } from '../../styles';

const LoginPage = () => {
  return (
    <Card.Base login>
      <Card.Body>
        <form action=''>
          <Form.Group>
            <Form.Label group htmlFor='email'>
              Email
            </Form.Label>
            <Form.Input type='email' name='email' />
          </Form.Group>
          <Form.Group>
            <Form.Label group htmlFor='password'>
              Password
            </Form.Label>
            <Form.Input type='password' name='Password' />
          </Form.Group>
          <div className='w-full flex justify-end'>
            <Button purple>Login</Button>
          </div>
        </form>
      </Card.Body>
    </Card.Base>
  );
};

export default LoginPage;
