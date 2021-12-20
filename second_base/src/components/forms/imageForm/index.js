import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Form, Button } from '../../../styles';

const ImageForm = ({ updateTask, img }) => {
  const [isLoading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async data => {
    setLoading(true);
    const res = updateTask(data);

    if (res) {
      reset();
      setTimeout(() => setLoading(false), 2550);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid.Container pad>
        <Grid.Col>
          <Form.Toggle innerRef={register} defaultChecked={img.color} name='color' />
        </Grid.Col>
        <Grid.Col>
          <Form.Group>
            <Form.Label group htmlFor='photographer'>
              Photographer
            </Form.Label>
            <Form.Input
              ref={register}
              defaultValue={img.photographer}
              id='photographer'
              type='text'
              name='photographer'
            />
          </Form.Group>
        </Grid.Col>
      </Grid.Container>
      <Grid.Col>
        <Button purple type='submit'>
          Save
        </Button>
      </Grid.Col>
    </form>
  );
};

export default ImageForm;
