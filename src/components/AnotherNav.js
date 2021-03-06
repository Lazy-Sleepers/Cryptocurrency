import React, { Component } from "react";
import Responsive from "react-responsive";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import Notification from "./Notification";
import SendReceive from "../pages/SendReceive";
import ProfileDrop from "./ProfileDrop";
export default class AnotherNav extends Component {
  render() {
    const Desktop = (props) => <Responsive {...props} minWidth={992} />;
    const Mobile = (props) => <Responsive {...props} maxWidth={991} />;

    return (
      <>
        <Desktop>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand
              as={Link}
              to="/"
              className="text-warning"
              style={{ fontWeight: "900" }}
            >
              Cryptocurrency
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/trading">
                Trading Market
              </Nav.Link>
              <Nav.Link as={Link} to="/wallet">
                Wallet
              </Nav.Link>
              <SendReceive />
            </Nav>
            <Nav>
              <Nav.Link>
                <Notification />
              </Nav.Link>
              <Nav.Link>
                <ProfileDrop />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Desktop>
        <Mobile>
          <Navbar fixed="top" bg="primary" variant="dark">
            <Navbar.Brand
              as={Link}
              to="/"
              className="text-warning"
              style={{ fontWeight: "900" }}
            >
              Cryptocurrency
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link>
                <Notification />
              </Nav.Link>
              <Nav.Link>
                <ProfileDrop />
              </Nav.Link>
            </Nav>
          </Navbar>
          <Navbar
            fixed="bottom"
            bg="primary"
            variant="dark"
            style={{ boxShadow: "0px -2px 8px #1a237e" }}
          >
            <Nav className="ml-auto parent ">
              <Nav.Link as={Link} to="/wallet">
                <FaIcons.FaWallet size={30} className="text-warning" />
              </Nav.Link>
            </Nav>
            <Nav className="mx-auto parent ">
              <SendReceive />
            </Nav>
            <Nav className="mr-auto parent ">
              <Nav.Link as={Link} to="/trading">
                <FaIcons.FaChartBar size={30} className="text-warning" />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Mobile>
      </>
    );
  }
}
