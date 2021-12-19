/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Nav } from '../../styles';
import Links from './Links';
import Logo from '../logo';

const Navbar = () => {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState('');
  const [burgerActive, setBurgerActive] = useState(false);

  useEffect(() => {
    const unsubscribe = () => {
      let path = pathname.split('/');
      setActivePath(path[path.length - 1]);
    };

    return unsubscribe();
  }, [pathname]);

  return (
    <>
      <Nav.Bar
        sticky // will be conditional
        dark // will be conditional
        layout
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        transition={{ duration: 0.3, delay: 0.1, ease: 'easeIn' }}
      >
        <div className='inner-nav-spacing'>
          <div className='inner-nav-content'>
            <div className='nav-logo'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>
            <Nav.Burger
              active={burgerActive}
              onClick={() => setBurgerActive(!burgerActive)}
            />
            <Nav.Links>
              <Links activePath={activePath} />
            </Nav.Links>
          </div>
        </div>
        <AnimatePresence>
          {burgerActive && (
            <Nav.SideNav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ suration: 0.5, delay: 0.2, ease: 'easeIn' }}
            >
              <div tw='flex flex-col w-min'>
                <Links activePath={activePath} />
              </div>
            </Nav.SideNav>
          )}
        </AnimatePresence>
      </Nav.Bar>
    </>
  );
};

export default Navbar;
