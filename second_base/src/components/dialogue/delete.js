/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import React from 'react';
import Modal from '../modal';
import { Btn } from '../../styles';

const ConfirmDelete = ({ isOpen, handleClose, deleteTask }) => {
  return (
    <Modal dialogue={1} isOpen={isOpen} handleClose={handleClose}>
      <p>Deleting data can't be undone. Delete anyway?</p>
      <div tw='flex justify-end'>
        <Btn onClick={handleClose}>Cancel</Btn>
        <Btn onClick={deleteTask} red>
          Delete
        </Btn>
      </div>
    </Modal>
  );
};

export default ConfirmDelete;
