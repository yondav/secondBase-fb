/** @jsxImportSource @emotion/react */
import tw, { styled, css } from 'twin.macro';

export const StyledBtn = styled.button(({ purple, red }) => [
  tw`block rounded-lg m-3 px-4 py-3 text-center transition-all duration-300 ease-in-out hover:shadow-lg`,

  purple &&
    css`
      background-image: linear-gradient(to right, #6441a5 50%, #503484 51%, #6441a5 100%);
      background-size: 200% auto;
      color: #e0e0db;

      &:hover {
        background-position: right center;
      }
    `,

  red &&
    css`
      background-image: linear-gradient(to right, #9f5e5e 50%, #8f5454 51%, #9f5e5e 100%);
      background-size: 200% auto;
      color: #e0e0db;

      &:hover {
        background-position: right center;
      }
    `,
]);

const Button = ({ purple, red, children, ...rest }) => (
  <StyledBtn {...rest} purple={purple ? 1 : 0} red={red ? 1 : 0}>
    {children}
  </StyledBtn>
);

export default Button;
