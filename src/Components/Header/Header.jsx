import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {
    
  
    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>Responsive Pages</Navbar.Brand>
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
  