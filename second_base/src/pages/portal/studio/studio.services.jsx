import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { DataContext } from '../../../context/data/firebase.context.data';
import { Grid, Alert, Form } from '../../../components';

const StudioServices = () => {
  const {
    state: {
      data: {
        studio: { address, services },
      },
    },
  } = useContext(DataContext);
  const [alert, setAlert] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => console.log(data);

  const Input = ({ split, label, type, name, defaultValue }) => (
    <Grid.Col pad split={split ? 1 : undefined}>
      <Form.Group>
        <Form.Label group htmlFor={name}>
          {label}
        </Form.Label>
        <Form.Input ref={register} type={type} name={name} defaultValue={defaultValue} />
      </Form.Group>
    </Grid.Col>
  );

  return (
    <>
      <AnimatePresence>
        {!!alert && <Alert variant={alert.variant} message={alert.message} />}
      </AnimatePresence>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid.Container>
          <Input
            label='Street Address'
            type='text'
            name='address.street'
            defaultValue={address.street}
          />
          <Input
            split
            label='Neighborhood'
            type='text'
            name='address.neighborhood'
            defaultValue={address.neighborhood}
          />
          <Input split label='City' type='text' name='address.city' defaultValue={address.city} />
          <Input
            split
            label='State'
            type='text'
            name='address.state'
            defaultValue={address.state}
          />
          <Input
            split
            label='Zip Code'
            type='text'
            name='address.zip_code'
            defaultValue={address.zip_code}
          />
        </Grid.Container>
      </form>
    </>
  );
};

export default StudioServices;
