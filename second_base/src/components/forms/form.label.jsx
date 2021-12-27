/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';

const StyledLabel = styled.label(({ group, check }) => [
  group && tw`inline-block mb-5`,
  check && tw`flex flex-row-reverse`,
]);

const Label = ({ group, check, children }) => (
  <StyledLabel group={group} check={check ? 1 : 0}>
    {children}
  </StyledLabel>
);

export default Label;
