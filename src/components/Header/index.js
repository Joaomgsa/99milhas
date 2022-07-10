import React from "react";
import { NavLink, Link } from "react-router-dom";
import './index.css';

import logo from '../../assets/images/logo-removebg.png';
import { Container } from "reactstrap";

import { GiAirplaneDeparture, GiBeachBag, GiStarProminences, GiFamilyHouse } from 'react-icons/gi';



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
                            <NavLink to={"/Voos"} className="navlink-a" style={({isActive}) => isActive ? activeStyle : undefined }>
                            <GiAirplaneDeparture size={32}/>
                                Voos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Pacotes"} className="navlink-a" style={({isActive}) => isActive ? activeStyle : undefined }>
                            <GiBeachBag size={32}/>
                                Pacotes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Promo"} className="navlink-a" style={({isActive}) => isActive ? activeStyle : undefined }>
                            <GiStarProminences size={32}/>
                                Promos 2022
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Resort"} className="navlink-a" style={({isActive}) => isActive ? activeStyle : undefined }>
                            <GiFamilyHouse size={32}/>
                                Resorts
                            </NavLink>
                        </li>
                    </ul>
                    
                </nav>  
            
        </header>
        
    );

}