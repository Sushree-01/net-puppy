import '../Style/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">INQUIRE</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">APPLY</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">SUPPORT US</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Parents</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Alums</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
