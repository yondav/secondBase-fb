/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { toTitle } from '../../utils/helpers';
import Group from './form.group';
import Label from './form.label';
import Input from './form.input';

const CheckInput = styled(Input)`
  ${tw`relative cursor-pointer h-5 w-10 rounded-full appearance-none bg-gray-400 dark:bg-gray-850 checked:(bg-gray-600 dark:bg-gray-600) transition duration-300 after:(absolute h-6 w-6 rounded-full bg-gray-900 dark:bg-gray-750 top-0 left-0 transform transition duration-300) checked:after:(scale-110 translate-x-5)`}
`;

const Toggle = ({ name, innerRef, ...rest }) => {
  return (
    <Group style={{ width: 'fit-content' }}>
      <Label htmlFor={name} check>
        <CheckInput ref={innerRef} {...rest} id={name} name={name} type='checkbox' />
        <span tw='mx-3'>{toTitle(name)}</span>
      </Label>
    </Group>
  );
};

export default Toggle;
