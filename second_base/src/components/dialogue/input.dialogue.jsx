/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState } from 'react';
import Modal from '../modal';
import { Form } from '../forms';
import { toTitle } from '../../utils/helpers';

const InputDialogue = ({ isOpen, handleClose, form }) => {
  const [inputVal, setInputVal] = useState({});

  const handleChange = e => {
    const obj = { ...inputVal };
    obj[e.target.getAttribute('name')] = e.target.value;

    setInputVal(obj);
  };

  return (
    <Modal dialogue={1} isOpen={isOpen} handleClose={handleClose}>
      {form.inputs.map(inp => (
        <Form.Group key={inp.name}>
          <Form.Label group htmlFor={inp.name}>
            {toTitle(inp.name)}
          </Form.Label>
          <Form.Input id={inp.name} type={inp.type} name={inp.name} onChange={handleChange} />
        </Form.Group>
      ))}
      <div tw='flex justify-end'>
        <Form.Button onClick={handleClose}>Cancel</Form.Button>
        <Form.Button
          onMouseDown={() => {
            form.task(inputVal);
            handleClose();
          }}
          purple
        >
          Save
        </Form.Button>
      </div>
    </Modal>
  );
};

export default InputDialogue;
