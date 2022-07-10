import React from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink} from "reactstrap";

export default function navbar () {
    return (
      <div>
        <Navbar
            color="light"
            expand="md"
            light>

        </Navbar>
        <NavbarBrand href="/">
            99milhas
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck(){}} />
        <Collapse navbar>
            <Nav 
                className="me-auto"
                navbar
            >
                <NavItem>
                    <NavLink href="/components/">
                        Components
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/joaomgsa">
                        Meu Github
                    </NavLink>
                </NavItem>
            </Nav>
            <NavbarText>
                99milhas
            </NavbarText>
        </Collapse>
      </div> 

    )
}

