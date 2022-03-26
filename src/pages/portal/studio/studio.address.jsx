/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { DataContext } from '../../../context/data/firebase.context.data';
import useData from '../../../context/data/firebase.actions.useData';
import useAlert from '../../../hooks/useAlert';
import useNavigateBelow from '../../../hooks/useNavigateBelow';
import { Grid, Form, Alert } from '../../../components';

const StudioAddress = () => {
  const {
    state: {
      data: { studio },
    },
  } = useContext(DataContext);
  const { address } = studio;

  const { updateStudio } = useData();
  const { alert, updateAlert } = useAlert();
  const navigateBelow = useNavigateBelow();

  const { register, handleSubmit } = useForm();

  const onSubmit = async data => {
    const update = await updateStudio({ ...studio, ...data });

    if (update) {
      updateAlert({ variant: 'success', message: 'Address has been updated' });
      setTimeout(() => navigateBelow(), 3500);
    } else {
      updateAlert({ variant: 'danger', message: 'Address could not be updated' });
    }
  };

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
        <div tw='flex justify-end'>
          <Form.Button purple type='submit'>
            Save
          </Form.Button>
        </div>
      </form>
    </>
  );
};

export default StudioAddress;
