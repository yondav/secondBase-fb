/** @jsxImportSource @emotion/react */
import tw, { styled, css } from 'twin.macro';

const Container = styled.div(({ square, circle, color }) => [
  tw`relative overflow-hidden w-full rounded-lg`,

  square &&
    css`
      ${tw`before:block`}

      &:before {
        content: '';
        padding-top: 100%;
      }

      & img {
        ${tw`absolute top-1/2 left-1/2 -translate-y-1/2	-translate-x-1/2`}
      }
    `,

  circle && tw`rounded-full`,

  !color &&
    css`
      filter: saturate(0);
    `,
]);

export default Container;
