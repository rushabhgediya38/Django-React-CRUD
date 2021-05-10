import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function NavbarMenu() {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Nav className='mr-auto'>
          <NavLink className='show-products-nav' to='/'>
            Products
          </NavLink>
          <NavLink className='add-products-nav' to='/add'>
            AddProducts
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  )
}

export default NavbarMenu
