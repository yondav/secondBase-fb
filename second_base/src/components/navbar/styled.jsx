import tw, { styled, css } from 'twin.macro';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// navbar wrapper
const NavBar = styled(motion.nav)(({ dark, sticky }) => [
  css`
    ${tw`z-10 py-5 px-4 absolute top-0 left-0 w-screen font-primary text-base font-light text-gray-500 transition-all duration-300 ease-in`}
    background-color: #252424a1;
  `,

  dark && tw`bg-gray-900`,
  sticky && tw`fixed`,
]);

export const Bar = ({ dark, sticky, children }) => (
  <NavBar dark={dark ? 1 : undefined} sticky={sticky ? 1 : undefined}>
    <div tw='mx-auto px-8 transition-all duration-300 ease-in-out'>{children}</div>
  </NavBar>
);

// nav links
const StyledLink = styled(RouterLink)(({ active, name, invert, side, sticky }) => [
  tw`pt-6 px-2 text-gray-500 hover:text-gray-500 transition duration-300`,
  active === name && tw`text-gray-500`,
  invert && tw`text-gray-950 hover:text-gray-600`,
  side && tw`hover:bg-gray-950 w-full py-4 pl-3`,
  side &&
    sticky &&
    css`
      &:hover {
        background-color: #252424c1;
      }
    `,
]);

export const Link = ({ text, active, name, to, onClick, invert, side, sticky }) => (
  <>
    <StyledLink
      to={to}
      name={name}
      active={active ? 1 : undefined}
      onClick={onClick}
      invert={invert ? 1 : undefined}
      side={side ? 1 : undefined}
      sticky={sticky ? 1 : undefined}
    >
      {text}
    </StyledLink>
  </>
);

const StyledIcon = styled.div(({ invert }) => [
  tw`pt-6 px-2 text-lg text-gray-500 hover:text-gray-500 transition duration-300 cursor-pointer`,
  invert && tw`text-gray-950 hover:text-gray-600`,
]);

export const Icon = ({ invert, children, ...rest }) => (
  <StyledIcon {...rest} invert={invert ? 1 : undefined}>
    {children}
  </StyledIcon>
);

const Hamburger = styled.div(({ active }) => [
  tw`lg:hidden relative z-20 flex items-center justify-center w-10 h-10 cursor-pointer transition-all duration-300 ease-in-out`,

  css`
    margin-right: ${active && `10rem !important`};
    & .top-bun {
      transform: ${active ? `rotate(-135deg)` : `translateY(-5.5px)`};
      ${tw`absolute block w-full h-px bg-gray-300 top-0 left-0 bottom-0 m-auto transition-all duration-300 ease-in-out`}
    }

    & .bottom-bun {
      transform: ${active ? `rotate(135deg)` : `translateY(5.5px)`};
      ${tw`absolute block w-full h-px bg-gray-300 top-0 left-0 bottom-0 m-auto transition-all duration-300 ease-in-out`}
    }
  `,
]);

export const Burger = ({ active, onClick }) => (
  <Hamburger active={active ? 1 : undefined} onClick={onClick}>
    <div className='top-bun' />
    <div className='bottom-bun' />
  </Hamburger>
);

// side nav for mobile
const StyledSideNav = styled(motion.div)(({ sticky }) => [
  css`
    ${tw`focus:outline-none`}
    background-color: #252424a1;
    width: fit-content;
  `,
  tw`w-60 py-8 right-0 top-20 fixed rounded-bl-lg shadow-lg`,
  sticky && tw`bg-gray-900 shadow-none`,
]);

export const SideNav = ({ sticky, innerRef, children, ...rest }) => (
  <StyledSideNav ref={innerRef} sticky={sticky ? 1 : undefined} {...rest}>
    {children}
  </StyledSideNav>
);
