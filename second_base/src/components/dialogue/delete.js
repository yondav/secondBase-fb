/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import Modal from '../modal';
import { Form } from '../forms';

const ConfirmDelete = ({ isOpen, handleClose, deleteTask }) => {
  return (
    <Modal dialogue={1} isOpen={isOpen} handleClose={handleClose}>
      <p>Deleting data can't be undone. Delete anyway?</p>
      <div tw='flex justify-end'>
        <Form.Button onClick={handleClose}>Cancel</Form.Button>
        <Form.Button onClick={deleteTask} red>
          Delete
        </Form.Button>
      </div>
    </Modal>
  );
};

export default ConfirmDelete;
