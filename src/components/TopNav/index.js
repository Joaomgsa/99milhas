import './index.css';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-removebg.png';

import {GiHelp, GiMeshNetwork} from 'react-icons/gi';

export default function TopNav() {
    return (
        <div className='topNav-div'>
            <ul>
                <li>
                    <Link to="/">
                        <img src={logo} className="logo-img" alt="99milhas"/>
                    </Link>
                </li>
                <li>    
                    <Link  className='right-topnav' to="/">
                        <GiMeshNetwork size={18} /> Conexão 99
                    </Link>
                </li>
                <li>
                    <Link  className='right-topnav' to="/">
                        <GiHelp size={18} /> Ajuda
                    </Link>
                </li>
            </ul>

        </div>
    );

}