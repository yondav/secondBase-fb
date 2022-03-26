/** @jsxImportSource @emotion/react */
import tw, { styled } from 'twin.macro';
import { useContext, useCallback } from 'react';
import { ThemeContext } from '../../context/theme/theme.context';
import { DataContext } from '../../context/data/firebase.context.data';
import { Grid } from '../layout';
import Links from './Links';
import Logo from '../logo';
import { toTitle } from '../../utils/helpers';

const StyledFooter = styled.footer`
  ${tw`relative w-screen bg-gray-300 shadow-lg p-8 px-10 md:px-20 dark:(bg-gray-800 text-gray-500)`}

  & .footer-logo {
    ${tw`h-8 mb-4 w-60 mr-2 pb-3 transition-all duration-300 ease-in-out cursor-pointer`}
  }
`;

const Footer = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);

  const {
    state: {
      data: { images },
    },
  } = useContext(DataContext);

  const photographers = useCallback(() => {
    let photographerArr = [];
    let temp = [];
    // end product is an array of arrays. Each nested array represents a page and holds the string values of each image's photographer.
    const arr = Object.values(images).map(a => Object.values(a).map(img => img.photographer));
    arr.map(a => a.forEach(ind => photographerArr.push(ind))); // map over the parent array and for each index in the child arrays, push it to initialized empty array to create one array with no nested arrays
    for (let i of photographerArr) i && temp.push(i.toLowerCase()); // gets rid of empty values
    photographerArr = [...new Set(temp)]; // remove duplicates

    return <p>Photography by {photographerArr.map(pho => toTitle(pho)).join(', ')}</p>;
  }, [images]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <StyledFooter>
      <Grid.Container full>
        <Grid.Col splitSm>
          <div tw='flex flex-col h-full justify-center items-center sm:items-start pt-6 sm:(pb-12 pt-0)'>
            <div onClick={() => scrollToTop()} className='footer-logo'>
              <Logo invert={!dark ? true : false} />
            </div>
            {photographers()}
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
