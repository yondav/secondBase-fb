/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Links from './Links';
import Logo from '../logo';
import { fade, growHeight } from '../../utils/framer';
import * as Nav from './styled';

const Navbar = () => {
  const { pathname } = useLocation();
  const sideRef = useRef(null);
  const [activePath, setActivePath] = useState('');
  const [burgerActive, setBurgerActive] = useState(false);
  const [sticky, setSticky] = useState(null);
  useEffect(
    () => () => {
      let path = pathname.split('/');
      setActivePath(path[path.length - 1]);
    },
    [pathname]
  );

  useEffect(() => {
    if (sideRef.current) sideRef.current.focus();
  }, [burgerActive]);

  useEffect(() => {
    let oldValue = 0;
    let newValue = 0;
    window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY;
      newValue = window.pageYOffset;
      oldValue > newValue && scrollPosition > 10 ? setSticky(1) : setSticky(null);
      oldValue = newValue;
    });
  }, []);

  return (
    <>
      <Nav.Bar
        sticky={sticky} // will be conditional
        dark={sticky} // will be conditional
        layout
        initial={{ ...fade.hidden, ...growHeight.hidden }}
        animate={{ ...fade.visible(1), ...growHeight.visible }}
        transition={fade.transition(0.3, 0.1)}
      >
        <div tw='flex justify-between transition-all duration-300 ease-in-out'>
          <div tw='w-full flex  lg:pb-0 justify-between items-center space-x-7 transition-all duration-300 ease-in-out'>
            <div tw='h-8 w-60 mr-2 pb-3 transition-all duration-300 ease-in-out'>
              <Link to='/'>
                <Logo />
              </Link>
            </div>
            <Nav.Burger active={burgerActive} onClick={() => setBurgerActive(!burgerActive)} />
            <div tw='hidden lg:flex items-center space-x-1 transition-all duration-300 ease-in-out'>
              <Links activePath={activePath} />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {burgerActive && (
            <Nav.SideNav
              sticky={sticky}
              innerRef={sideRef}
              tabIndex={-1}
              onBlur={e => !e.currentTarget.contains(e.relatedTarget) && setBurgerActive(false)}
              initial={{ ...fade.hidden, x: 500 }}
              animate={{ ...fade.visible(1), x: 0 }}
              exit={{ ...fade.hidden, x: 500 }}
              transition={fade.transition(0.3, 0)}
            >
              <div tw='flex flex-col w-full'>
                <Links activePath={activePath} sticky={sticky} side={1} />
              </div>
            </Nav.SideNav>
          )}
        </AnimatePresence>
      </Nav.Bar>
    </>
  );
};

export default Navbar;
