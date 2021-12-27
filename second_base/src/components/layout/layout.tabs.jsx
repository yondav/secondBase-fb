/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { StyledBtn } from '../forms/form.button';

const StyledTab = styled(StyledBtn)(
  tw`w-full m-0 bg-gray-300	hover:(bg-gray-500 shadow-none) dark:bg-gray-800 dark:hover:bg-gray-850 text-gray-950 dark:text-gray-500 rounded-none`
);

const Tab = ({ children, curr, as, to }) =>
  curr ? (
    <StyledTab className='button-link' as={as} to={to} tw='bg-gray-500 dark:bg-gray-850'>
      {children}
    </StyledTab>
  ) : (
    <StyledTab className='button-link' as={as} to={to}>
      {children}
    </StyledTab>
  );

export default Tab;
