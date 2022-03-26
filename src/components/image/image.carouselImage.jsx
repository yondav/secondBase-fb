/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';

const CarouselImageContainer = styled.div`
  ${tw`overflow-hidden w-full rounded-lg relative`}
  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  & div {
    ${tw`h-2/3 absolute top-0 left-0 flex justify-center items-center w-full`}
  }
`;
export default CarouselImageContainer;
