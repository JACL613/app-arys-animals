// import "../assets/css/basic.css";
import { Link } from "react-router-dom";
export function Navigator({ title, user, functionCloseSesion, logo }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          {logo ? (
            <img src={logo} alt="logo-principal" width="40" height="34" />
          ) : null}
          {title ? title : "Titulo"}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container ">
          <div
            className="collapse navbar-collapse float-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Configuraciones
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      to="/administracion"
                      className="dropdown-item"
                      href="#"
                    >
                      Administracion
                    </Link>
                  </li>
                  {user ? (
                    <li>
                      <Link
                        to="/"
                        onClick={functionCloseSesion}
                        className="dropdown-item"
                        href="#"
                      >
                        Salir
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
