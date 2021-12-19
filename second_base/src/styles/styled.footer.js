import tw, { styled } from 'twin.macro';

export const StyledFooter = styled.footer`
  ${tw`relative w-screen bg-gray-50 shadow-lg p-8 px-10 md:px-20 dark:(bg-gray-800 text-gray-50)`}

  & .footer-logo {
    ${tw`h-8 mb-4 w-60 mr-2 pb-3 transition-all duration-300 ease-in-out cursor-pointer`}
  }
`;
