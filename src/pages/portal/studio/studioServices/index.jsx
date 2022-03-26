/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { DataContext } from '../../../../context/data/firebase.context.data';
import useData from '../../../../context/data/firebase.actions.useData';
import useAlert from '../../../../hooks/useAlert';
import useNavigateBelow from '../../../../hooks/useNavigateBelow';
import { Grid, Alert, Form } from '../../../../components';
import StudioServicesService from './studioServices.service';

const StudioServices = () => {
  const {
    state: {
      data: { studio },
    },
  } = useContext(DataContext);
  const { services } = studio;
  const { updateStudio } = useData();
  const { alert, updateAlert } = useAlert();
  const navigateBelow = useNavigateBelow();

  const [serviceList, setServiceList] = useState([...services]);

  const handleSave = async () => {
    const update = await updateStudio({ ...studio, services: serviceList });

    if (update) {
      updateAlert({ variant: 'success', message: `Services have been updated` });
      setTimeout(() => navigateBelow(), 3500);
    } else {
      updateAlert({ variant: 'danger', message: `Services have not been updated` });
    }
  };

  return (
    <>
      <AnimatePresence>
        {!!alert && <Alert variant={alert.variant} message={alert.message} />}
      </AnimatePresence>
      <Grid.Container>
        {serviceList.map((serv, i) => (
          <StudioServicesService
            key={`${serv.id}-00${i}`}
            serv={serv}
            i={i}
            setServiceList={setServiceList}
            serviceList={serviceList}
          />
        ))}
      </Grid.Container>
      <div tw='flex justify-end'>
        <Form.Button purple type='button' onClick={handleSave}>
          Save
        </Form.Button>
      </div>
    </>
  );
};

export default StudioServices;
