/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { toTitle } from '../utils/helpers';

export const Group = styled.div(({ check }) => [
  tw`mb-8`,

  check && tw`mb-8 flex flex-row-reverse justify-end items-center`,
]);

export const Label = styled.label(({ group }) => [group && tw`inline-block mb-5`]);

export const Input = styled.input`
  ${tw`p-3 block w-full text-gray-800 bg-gray-200 rounded-lg focus:shadow-lg transition-all duration-300 ease-in-out dark:(bg-gray-900 text-gray-150)`}

  font-weight: normal;

  &:focus-visible {
    outline: none;
  }
`;

const CheckInput = styled(Input)`
  ${tw`relative cursor-pointer h-5 w-10 rounded-full appearance-none bg-gray-400 dark:bg-gray-850 checked:(bg-gray-600 dark:bg-gray-600) transition duration-300 after:(absolute h-6 w-6 rounded-full bg-gray-900 dark:bg-gray-750 top-0 left-0 transform transition duration-300) checked:after:(scale-110 translate-x-5)`}
`;

export const Toggle = ({ name, innerRef, ...rest }) => {
  return (
    <Group style={{ width: 'fit-content' }}>
      <Label htmlFor={name} tw='flex flex-row-reverse'>
        <CheckInput ref={innerRef} {...rest} id={name} name={name} type='checkbox' />
        <span tw='mx-3'>{toTitle(name)}</span>
      </Label>
    </Group>
  );
};
