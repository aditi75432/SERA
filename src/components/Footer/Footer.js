
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="#">
              AVAA
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="#"
            target="_blank"
          >
            SERA
          </a>{" "}
          for a better financial education.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
