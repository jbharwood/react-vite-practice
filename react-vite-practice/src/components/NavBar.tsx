import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar-container">
      <Link to="/">Home</Link>
      <Link to="/stoplight">Stop Light</Link>
    </nav>
  );
}
