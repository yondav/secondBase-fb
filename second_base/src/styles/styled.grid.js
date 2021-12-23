import tw, { styled } from 'twin.macro';

// grid styles limited logic on columns. use classes directly in component for more complex layouts
export const Container = styled.div(({ pad, screen, full }) => [
  tw`grid grid-cols-12`,

  pad && tw`p-4`,
  screen && tw`w-screen h-screen`,
  full && tw`h-full w-full`,
]);

export const Col = styled.div(({ split, thirds, pad, splitSm }) => [
  tw`col-span-12`,
  split && tw`md:col-span-6`,
  splitSm && tw`sm:col-span-6`,
  thirds && tw`md:col-span-6 lg:col-span-4`,
  pad && tw`py-3 px-4`,
]);
