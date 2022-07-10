import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from '../../assets/images/logo-removebg.png';



export default function Header() {
    let activeStyle = {
        textDecoration: "underline",
     };

     let activeClassName = "underline";
    
    return (
        <header>
            <Link to="/">
                <img src={logo} className="logo-img" alt="99milhas"/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"} style={({isActive}) => isActive ? activeStyle : undefined }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Voos"} style={({isActive}) => isActive ? activeStyle : undefined }>
                            Voos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/Pacotes"} style={({isActive}) => isActive ? activeStyle : undefined }>
                            Pacotes
                        </NavLink>
                    </li>
                </ul>
                
            </nav>  
            
        </header>
        
    );

}