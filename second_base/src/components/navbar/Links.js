import React, { useContext } from 'react';
import {
  RiContrast2Line,
  RiContrast2Fill,
  RiInstagramLine,
  RiInstagramFill,
} from 'react-icons/ri';

import useAuth from '../../context/auth/firebase.useAuth';
import { ThemeContext } from '../../context/theme/theme.context';
import { Flex, Nav } from '../../styles';

const pageLinks = [
  { name: 'about', text: 'About', to: '/about' },
  { name: 'gear', text: 'Gear', to: '/gear' },
  { name: 'artists', text: 'Artists', to: '/artists' },
  { name: 'booking', text: 'Booking', to: '/booking' },
];
const adminLinks = logout => [
  { name: 'portal', text: 'Portal', to: '/admin/portal' },
  { name: 'logout', text: 'Log out', to: '/admin/login', onClick: logout },
];

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
          to={pg.to}
          text={pg.text}
          name={pg.name}
          active={activePath}
        />
      ))}
      {!!user &&
        adminLinks(logout).map((pg, i) => (
          <Nav.NavLink
            key={i}
            to={pg.to}
            text={pg.text}
            name={pg.name}
            active={activePath}
            onClick={pg.onClick}
          />
        ))}
      <Flex>
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
      </Flex>
    </>
  );
};

export default Links;
