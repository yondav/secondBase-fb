import tw, { styled } from 'twin.macro';

export const Container = styled.div(({ pad }) => [
  tw`grid grid-cols-12`,

  pad && tw`p-4`,
]);

export const Col = styled.div(({ split, pad }) => [
  tw`col-span-12`,
  split && tw`md:col-span-6`,
  pad && tw`py-3 px-4`,
]);
