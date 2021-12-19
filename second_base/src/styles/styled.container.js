import tw, { styled } from 'twin.macro';

export const WrapApp = styled.div`
  ${tw`font-primary flex flex-col justify-center items-center bg-gray-200 text-gray-950 dark:(bg-gray-850 text-gray-50) transition-all duration-300 ease-in-out`}

  min-height: 100vh;
`;
