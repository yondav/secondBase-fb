/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useContext } from 'react';
import {
  RiContrast2Line,
  RiContrast2Fill,
  RiInstagramLine,
  RiInstagramFill,
} from 'react-icons/ri';

import useAuth from '../../context/auth/firebase.actions.useAuth';
import { ThemeContext } from '../../context/theme/theme.context';
import { Nav } from '../../styles';
import { toTitle } from '../../utils/helpers';
import { pageLinks, adminLinks } from './linksObs';

const Links = ({ activePath }) => {
  const {
    toggleTheme,
    state: { dark },
  } = useContext(ThemeContext);
  const {
    state: { user },
    logout,
  } = useAuth();
  return (
    <>
      {pageLinks.map((pg, i) => (
        <Nav.NavLink
          key={i}
          to={`/${pg.name}`}
          text={toTitle(pg.name)}
          name={pg.name}
          active={activePath}
        />
      ))}
      {!!user &&
        adminLinks(logout).map((pg, i) => (
          <Nav.NavLink
            key={i}
            to={pg.to}
            text={toTitle(pg.name)}
            name={pg.name}
            active={activePath}
            onClick={pg.onClick}
          />
        ))}
      <div tw='flex'>
        <Nav.Icon onClick={toggleTheme}>
          {dark ? <RiContrast2Fill /> : <RiContrast2Line />}
        </Nav.Icon>
        <a
          href='https://www.instagram.com/secondbasebk/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Nav.Icon>
            {dark ? <RiInstagramLine /> : <RiInstagramFill />}
          </Nav.Icon>
        </a>
      </div>
    </>
  );
};

export default Links;
