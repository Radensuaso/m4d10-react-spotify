import { withRouter, Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const NavHome = (props) => (
  <Navbar className="navbar-dark" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto d-flex justify-content-center w-100">
        <Link
          to="/home"
          className={
            props.location.pathname === "/home" ? "nav-link active" : "nav-link"
          }
        >
          <strong>TRENDING</strong>
        </Link>
        <Link
          className={
            props.location.pathname === "/home/podcast"
              ? "nav-link active"
              : "nav-link"
          }
          to="/home/podcast"
        >
          <strong>PODCAST</strong>
        </Link>
        <Link
          className={
            props.location.pathname === "/home/moods"
              ? "nav-link active"
              : "nav-link"
          }
          to="/home/moods"
        >
          <strong> MOODS AND GENRES</strong>
        </Link>
        <Link
          className={
            props.location.pathname === "/home/releases"
              ? "nav-link active"
              : "nav-link"
          }
          to="/home/releases"
        >
          <strong> NEW RELEASES</strong>
        </Link>
        <Link
          className={
            props.location.pathname === "/home/discover"
              ? "nav-link active"
              : "nav-link"
          }
          to="/home/discover"
        >
          <strong>DISCOVER</strong>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default withRouter(NavHome)
