/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme/theme.context';
// import { DataContext } from '../../context/data/firebase.context.data';
import { StyledFooter, Grid } from '../../styles';
import Links from '../footer/Links';
import Logo from '../logo';

const Footer = () => {
  const {
    toggleTheme,
    state: { dark },
  } = useContext(ThemeContext);

  // const {
  //   state: {
  //     data: { images },
  //   },
  // } = useContext(DataContext);

  // write a function to retrwive all photographers. Object.values good starting point.

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <StyledFooter>
      <Grid.Container full>
        <Grid.Col splitSm>
          <div tw='flex flex-col h-full justify-center items-center sm:items-start pt-6 sm:(pb-12 pt-0)'>
            <div onClick={() => scrollToTop()} className='footer-logo'>
              <Logo invert={!dark ? true : false} />
            </div>
            {/* placeholder */}
            <p>Photography: Maverick Inman & Chris Elia</p>
          </div>
        </Grid.Col>
        <Grid.Col splitSm>
          <div tw='flex flex-col justify-center items-center sm:items-end pb-12 px-2'>
            <Links dark={dark} toggleTheme={toggleTheme} />
          </div>
        </Grid.Col>
        <p tw='absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap'>
          &#169; {new Date().getFullYear()} secondBase
        </p>
      </Grid.Container>
    </StyledFooter>
  );
};

export default Footer;
