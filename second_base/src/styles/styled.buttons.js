/** @jsxImportSource @emotion/react */
import tw, { styled, css } from 'twin.macro';

export const Btn = styled.button(({ purple, red }) => [
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

// encountering a bug with dark mode on curr prop. This is a working solution though it sort of defeats the purpose of the library.
const StyledTab = styled(Btn)(
  tw`w-full m-0 bg-gray-300	hover:bg-gray-500 dark:bg-gray-800 dark:hover:bg-gray-850 dark:text-gray-500 rounded-b-none`
);

export const Tab = ({ children, curr, as, to }) =>
  curr ? (
    <StyledTab as={as} to={to} tw='bg-gray-500 dark:bg-gray-850 shadow-lg'>
      {children}
    </StyledTab>
  ) : (
    <StyledTab as={as} to={to}>
      {children}
    </StyledTab>
  );

export const Button = ({ children, ...rest }) => (
  <div tw='flex justify-end'>
    <Btn {...rest}>{children}</Btn>
  </div>
);
