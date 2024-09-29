import './Navbar.css';

import { Link } from "react-router-dom";


function Navbar() {

    return (
      <>
        <nav className="nav">
          <div className="logo">LOGO</div>
          <ul className="items">
            <Link to="/" className="item">
              Function Component
            </Link>
            <Link to="/ClassComponent" className="item">
              Class Component
            </Link>
          </ul>
        </nav>
      </>
    );
}

export default Navbar;