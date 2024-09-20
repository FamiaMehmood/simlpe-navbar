import "./Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">Navbar</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page">
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                <i className="fas fa-info-circle"></i>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active" aria-current="page">
                <i className="fas fa-envelope"></i>
                contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn nav-btn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;