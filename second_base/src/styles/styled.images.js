import tw, { styled, css } from 'twin.macro';

const HeroStyles = styled.div`
  ${tw`w-full`}

  & .hero-inner {
    ${tw`h-screen text-center bg-no-repeat bg-center bg-fixed bg-cover`}
  }
`;

export const Hero = ({ url, color }) => (
  <HeroStyles>
    <div
      className='hero-inner'
      style={{
        backgroundImage: `url(${url})`,
        filter: !color && `saturate(0)`,
      }}
    ></div>
  </HeroStyles>
);

export const Container = styled.div(({ square, circle, color }) => [
  tw`overflow-hidden w-full rounded-lg`,

  square &&
    css`
      ${tw`relative before:block`}

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