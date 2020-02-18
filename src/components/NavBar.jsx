import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import AnotherCat from './images/AnotherCat.jpeg';

function NavBar(props) {
  var navBarAddStyles = {
    align: 'right',
    color: '#FFFC00',

   };

   var image = {
     display: 'block',
     width: 'auto',
     height: '60px',
     paddingRight: '20px'
   }
  return (
    <div style={navBarAddStyles}>
    <Navbar  bg="dark" variant="dark">
  <Navbar.Brand href="#home">SnapCat</Navbar.Brand>
  <img style={image} src="https://lh3.googleusercontent.com/proxy/BlSQSb6qbZYOjMKyjqiuIDTohKpsEVqSbJDN6RiZ0ZvOGT3ZDPiDX5oumfT2EksQxFP8o4g7dNJ8OBT4niq8K9cfgg" />
  <Nav className="mr-auto">
    <Nav.Link href="./">Home</Nav.Link>
    <Nav.Link href="./NewProfileForm">New Profile</Nav.Link>
    <Nav.Link href="./About">About</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-info">Search</Button>
  </Form>
</Navbar>
    </div>
  );
}




export default NavBar;
