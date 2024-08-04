import {NavLink} from "react-router-dom";
function Navbar() {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg navbar-light container-fluid fixed-top p-2" style={{backgroundColor:'#2C3E50'}}>
        <div className="container px-5 py-2 text-white">
        <NavLink className="navbar-brand text-white font-weight-bold" to="start_framework">Start Framework</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <NavLink className="nav-link px-0 pb-0 text-white font-weight-bold" to="about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3 pb-0 text-white font-weight-bold" to="portfolio">Portofolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3 pb-0 text-white font-weight-bold" to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
     );
}

export default Navbar;