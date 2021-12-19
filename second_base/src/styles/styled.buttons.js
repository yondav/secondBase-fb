/** @jsxImportSource @emotion/react */
import tw, { styled, css } from 'twin.macro';

export const Btn = styled.button(({ purple, tab, active }) => [
  tw`block rounded-lg m-3 px-4 py-3 text-center transition-all duration-300 ease-in-out hover:shadow-lg`,

  purple &&
    css`
      ${tw`transition-all duration-300 ease-in-out`}
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
  tab &&
    css`
      ${tw`w-full m-0 bg-gray-300	hover:bg-gray-150 dark:bg-gray-750 dark:hover:bg-gray-800 dark:text-gray-50 rounded-b-none`}
      ${active && tw`bg-gray-50 dark:bg-gray-900`}
    `,
]);

export const Button = ({ children, ...rest }) => (
  <div tw='flex justify-end'>
    <Btn {...rest}>{children}</Btn>
  </div>
);
