// src/components/Navbar.tsx
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import { FC } from 'react';

const MyNavbar: FC = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">MediSafe</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Link href="/" passHref>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNavbar;
