import tw, { styled, css } from 'twin.macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = styled(motion.nav)(({ dark, sticky }) => [
  css`
    & .inner-nav-wrap {
      ${tw`mx-auto px-8 transition-all duration-300 ease-in-out`}
    }

    & .inner-nav-spacing {
      ${tw`flex justify-between transition-all duration-300 ease-in-out`}
    }

    & .inner-nav-content {
      ${tw`w-full flex justify-between items-center space-x-7 transition-all duration-300 ease-in-out`}
    }

    & .nav-logo {
      ${tw`h-8 w-60 mr-2 pb-3 transition-all duration-300 ease-in-out`}
    }
  `,

  tw`absolute top-0 left-0 w-screen	py-3 font-primary text-base font-light text-gray-500 transition-all duration-300 ease-in`,
  dark && tw`bg-gray-900`,
  sticky && tw`fixed z-10`,
]);

export const Bar = ({ dark, sticky, children }) => (
  <NavBar dark={dark ? +true : +false} sticky={sticky ? +true : +false}>
    <div className='inner-nav-wrap'>{children}</div>
  </NavBar>
);

export const Links = styled.div(
  tw`hidden md:flex items-center space-x-1 transition-all duration-300 ease-in-out`
);

const StyledLink = styled(Link)(({ active, name }) => [
  tw`pt-6 px-2 text-gray-500 hover:text-gray-50 transition duration-300`,
  active === name && tw`text-gray-50 shadow-lg`,
]);

export const NavLink = ({ text, active, name, to, onClick }) => (
  <>
    <StyledLink to={to} name={name} active={active} onClick={onClick}>
      {text}
    </StyledLink>
  </>
);

export const Icon = styled.div(
  tw`pt-6 px-2 text-lg text-gray-500 hover:text-gray-50 transition duration-300 cursor-pointer`
);

const Hamburger = styled.div(({ active }) => [
  tw`md:hidden relative z-20 flex items-center justify-center w-10 h-10 cursor-pointer transition-all duration-300 ease-in-out`,

  css`
    margin-right: ${active && `35px !important`};
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
  <Hamburger active={active} onClick={onClick}>
    <div className='top-bun' />
    <div className='bottom-bun' />
  </Hamburger>
);

export const SideNav = styled(motion.div)(tw`bg-gray-900 flex justify-end`);
