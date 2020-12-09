import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import './Header.css'
const Header = () => {
    // i create my header using bootstrap and i use link-container from react-router-bootstrap
  
    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand className='nav-link'>Responsive Pages</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              
              <Nav className='ml-auto'>
                
                
                
                  <NavDropdown title='Manage Websites' id='adminmenu'>
                    
                    <LinkContainer to='/admin/pageList'>
                      <NavDropdown.Item>Websites</NavDropdown.Item>
                    </LinkContainer>
                    
                  </NavDropdown>
              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
  
  export default Header
  