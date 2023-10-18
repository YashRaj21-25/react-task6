import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-xxl">
                    <a href="#" className="navbar-brand">
                        <span className="fw-bold text-light">
                            <i className="bi bi-person-circle"></i> YR - PORTFOLIO
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                    arai-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><i className="bi bi-house-door-fill d-none d-md-inline"></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link"><i className="bi bi-file-earmark-person d-none d-md-inline"></i> About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link"><i className="bi bi-telephone-inbound-fill d-none d-md-inline"></i> Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;