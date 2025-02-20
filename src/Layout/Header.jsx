import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navItems } from "../Constants/Index.js";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        collapseOnSelect
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">
            <h1 className="rounded border px-2 shadow-sm text-secondary-color">
              RMRC&M
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                  className=" py-3"
                  key={item.id}
                  href={item.url}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
