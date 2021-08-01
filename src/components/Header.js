import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <h1>React router</h1>
      <ul className="nav-links">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
