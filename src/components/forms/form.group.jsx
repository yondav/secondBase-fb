/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';

const StyledGroup = styled.div(({ check }) => [
  tw`mb-8`,

  check && tw`mb-8 flex flex-row-reverse justify-end items-center`,
]);

const Group = ({ check, children, ...rest }) => (
  <StyledGroup check={check ? 1 : undefined} {...rest}>
    {children}
  </StyledGroup>
);

export default Group;
