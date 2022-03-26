/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';

const EditLink = ({ to }) => {
  return (
    <Link to={to} state={{ from: useLocation().pathname }}>
      <AiOutlineEdit
        size='2em'
        tw='absolute top-0 right-0 text-blue-900 hover:text-blue-900 dark:(text-blue-700 hover:text-blue-900) transition-all duration-300 ease-in'
      />
    </Link>
  );
};

export default EditLink;
