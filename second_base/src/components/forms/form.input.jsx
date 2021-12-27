/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';

const Input = styled.input`
  ${tw`p-3 block w-full text-gray-800 bg-gray-200 rounded-lg focus:shadow-lg transition-all duration-300 ease-in-out dark:(bg-gray-900 text-gray-150)`}

  font-weight: normal;

  &:focus-visible {
    outline: none;
  }
`;

export default Input;
