import tw, { styled, css } from 'twin.macro';

export const Base = styled.div(({ login }) => [
  tw`relative flex flex-col bg-gray-50 dark:bg-gray-950 m-auto py-10 container rounded-md w-full overflow-hidden transition-all duration-300 ease-in-out`,

  css`
    & .card-body {
      ${tw`p-4 pt-8 overflow-scroll`}
    }
  `,

  login && tw`sm:w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/4`,
]);

export const Body = ({ children }) => (
  <div className='card-body'>{children}</div>
);
