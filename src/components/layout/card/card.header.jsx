const Header = ({ children, innerRef }) => (
  <header ref={innerRef} className='card-header'>
    {children}
  </header>
);

export default Header;
