/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { RiContrast2Line, RiContrast2Fill, RiInstagramLine, RiInstagramFill } from 'react-icons/ri';

import useAuth from '../../context/auth/firebase.actions.useAuth';
import * as Nav from '../navbar/styled';
import { pageLinks, adminLinks } from '../navbar/linksObs';
import { toTitle } from '../../utils/helpers';

const Links = ({ dark, toggleTheme }) => {
  const {
    state: { user },
    logout,
  } = useAuth();
  return (
    <>
      <div tw='flex h-full'>
        {pageLinks.map((pg, i) => (
          <Nav.Link
            key={i}
            to={`/${pg.name}`}
            text={toTitle(pg.name)}
            active={0}
            invert={!dark ? 1 : 0}
          />
        ))}
      </div>
      <div tw='flex h-full'>
        {!!user &&
          adminLinks(logout).map((pg, i) => (
            <Nav.Link
              key={i}
              to={pg.to}
              text={toTitle(pg.name)}
              active={0}
              onClick={pg.onClick}
              invert={!dark ? 1 : 0}
            />
          ))}
      </div>
      <div tw='flex flex-col justify-end absolute bottom-6 right-2'>
        <div tw='flex'>
          <Nav.Icon invert={!dark ? 1 : 0} onClick={toggleTheme}>
            {dark ? <RiContrast2Fill /> : <RiContrast2Line />}
          </Nav.Icon>
          <a
            href='https://www.instagram.com/secondbasebk/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Nav.Icon invert={!dark ? 1 : 0}>
              {dark ? <RiInstagramLine /> : <RiInstagramFill />}
            </Nav.Icon>
          </a>
        </div>
      </div>
    </>
  );
};

export default Links;
