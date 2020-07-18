import React, {useState , Component } from 'react'
import {Link} from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  }  from 'reactstrap';

  const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="warning" dark expand="md">
          <NavbarBrand tag={Link} to ="/">Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to ="/Contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to ="/Products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to ="/About">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink tag={Link} to ="/Users">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to ="/Profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to ="/Signin">Signin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to ="/Signup">Signup</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Header;