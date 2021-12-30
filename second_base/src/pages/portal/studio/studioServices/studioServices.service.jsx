/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { GrAdd, GrSubtract } from 'react-icons/gr';
import { Grid, Form } from '../../../../components';

const StudioServicesService = ({ serv, i, serviceList, setServiceList }) => {
  const handleRemove = () => {
    const list = () => {
      let arr = [...serviceList];
      arr.splice(i, 1);
      return arr;
    };
    setServiceList(list());
  };

  const handleAdd = () =>
    setServiceList(prev => [
      ...prev,
      { id: '_' + Math.random().toString(36).substring(2, 9), title: '' },
    ]);

  const handleChange = e => {
    e.preventDefault();
    let list = () => {
      let arr = [...serviceList];
      arr[i].title = e.target.value.trim();
      return arr;
    };
    setServiceList(list());
  };

  return (
    <Grid.Col pad>
      <div tw='flex'>
        <Form.Input type='text' defaultValue={serv.title} onChange={handleChange} />
        <div tw='w-1/3 flex justify-between items-center'>
          <Form.Button red circle type='button' onClick={handleRemove}>
            <GrSubtract />
          </Form.Button>
          {serviceList.length - 1 === i && (
            <Form.Button green circle type='button' onClick={handleAdd}>
              <GrAdd />
            </Form.Button>
          )}
        </div>
      </div>
    </Grid.Col>
  );
};

export default StudioServicesService;
