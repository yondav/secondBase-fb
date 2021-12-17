import tw, { styled } from 'twin.macro';

export const Group = styled.div(({ check }) => [
  tw`mb-8`,

  check && tw`mb-8 flex flex-row-reverse justify-end items-center`,
]);

export const Label = styled.label(({ group }) => [
  group && tw`inline-block mb-5`,
]);

export const Input = styled.input`
  ${tw`p-3 block w-full text-gray-800 bg-gray-150 rounded-lg focus:shadow-lg transition-all duration-300 ease-in-out dark:(bg-gray-900 text-gray-150)`}

  font-weight: normal;

  &:focus-visible {
    outline: none;
  }
`;
