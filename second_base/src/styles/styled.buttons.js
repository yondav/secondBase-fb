import tw, { styled, css } from 'twin.macro';

const Btn = styled.button(({ purple }) => [
  tw`block rounded-lg m-3 px-4 py-3 text-center transition-all duration-300 ease-in-out hover:shadow-lg`,

  purple &&
    css`
      background-image: linear-gradient(
        to right,
        #6441a5 50%,
        #503484 51%,
        #6441a5 100%
      );
      background-size: 200% auto;
      color: white;

      &:hover {
        background-position: right center;
      }
    `,
]);

const Align = styled.div`
  ${tw`flex justify-end`}
`;

export const Button = ({ children, ...rest }) => (
  <Align>
    <Btn {...rest}>{children}</Btn>
  </Align>
);
