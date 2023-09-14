import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h1>i4Digital</h1>

        <Link className="btn btn-primary float-right" to="/">
          Home
        </Link>

        <Link className="btn btn-success float-right" to="/new">
          Crear encuesta
        </Link>
      </nav>
    </div>
  );
}

export default navbar;
