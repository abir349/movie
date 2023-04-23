import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Navbarr({ settext, setrate }) {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#"> <img width="50" height="70"
          className="d-block w-100"
          src="Orange.jpg"
          alt=""
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}aaaaaaaaaaaa
            navbarScroll
          >
            <Nav.Link href="#action1"> <Link style={{textDecoration:"none", color:"white"}} to="/">Movies</Link></Nav.Link>
            <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"white"}} to="/about">About</Link></Nav.Link>
            <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"white"}} to="/contact">Contact</Link></Nav.Link>
            <Button 
        variant="dark"
        style={{ textAlign:"centre" , backgroundColor: "#FFD700", color: "white", border: "none" }}>
          Registre
      </Button>
          </Nav>
           
      
      
          <ReactStars
            count={5}
            size={24}
            activeColor="#FFD700"
            onChange={(newRating) => setrate(newRating)}
          />
          ,
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => settext(e.target.value)}
            />
            <Button
              variant="outline-success"
              style={{ backgroundColor: "#FFD700", border: "none", color: "white" }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;