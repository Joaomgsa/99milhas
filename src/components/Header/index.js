import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';




import { GiAirplaneDeparture, GiBeachBag, GiStarProminences, GiFamilyHouse } from 'react-icons/gi';
import { Container } from "reactstrap";



export default function Header() {
    let activeStyle = {
        textDecoration: "underline",
     };

     let activeClassName = "underline";
    
    return (
        <header>   
                <div className="center">
                    <nav>
                        <ul className="topnav">
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
                </div>             
        </header>
        
    );

}