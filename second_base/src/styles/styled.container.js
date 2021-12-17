import tw, { styled } from 'twin.macro';

export const WrapApp = styled.div`
  ${tw`font-primary flex justify-center items-center bg-gray-200 text-gray-950 dark:(bg-gray-850 text-gray-50) transition-all duration-300 ease-in-out`}

  min-height: 100vh;
`;

export const Flex = styled.div(
  ({
    col,
    row,
    jst,
    jnd,
    jbw,
    jar,
    jc,
    ast,
    and,
    abl,
    ac,
    pad,
    wfull,
    hfull,
  }) => [
    tw`flex`,
    col && tw`flex-col`,
    row && tw`flex-row`,
    jst && tw`justify-start`,
    jnd && tw`justify-end`,
    jbw && tw`justify-between`,
    jar && tw`justify-around`,
    jc && tw`justify-center`,
    ast && tw`items-start`,
    and && tw`items-end`,
    abl && tw`items-baseline`,
    ac && tw`items-center`,
    pad && tw`py-4 px-2`,
    wfull && tw`w-full`,
    hfull && tw`h-full`,
  ]
);
