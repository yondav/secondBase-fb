import tw, { styled } from 'twin.macro';

// wraps all content
const WrapApp = styled.div`
  ${tw`font-primary flex flex-col justify-center items-center bg-gray-500 text-gray-950 dark:(bg-gray-850 text-gray-500) transition-all duration-300 ease-in-out`}

  min-height: 100vh;

  & a {
    ${tw`text-blue-900 hover:text-blue-700 dark:(text-blue-700 hover:text-blue-500) transition-all duration-300`}
  }

  & .button-link {
    ${tw`text-gray-950 dark:text-gray-500`}
  }

  & h1 {
    ${tw`text-3xl font-bold font-header`}
  }

  & h2 {
    ${tw`text-2xl font-semibold font-header`}
  }

  & h3 {
    ${tw`text-xl font-header font-medium`}
  }

  & blockquote {
    ${tw`m-6 text-gray-750 dark:text-gray-650`}
  }

  & ul {
    ${tw`m-6 list-disc`}
  }

  & ol {
    ${tw`m-6 list-decimal`}
  }
`;

export default WrapApp;
