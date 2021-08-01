import './Header.css';

function Header() {
  return (
    <div className="header">
      <h1>React router</h1>
      <ul className="nav-links">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/profile">Profile</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
