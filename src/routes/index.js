import {Route, Routes} from "react-router-dom";

import Home from "../pages/Home";
import Pacotes from "../pages/Pacotes";
import Promos from "../pages/Promos";
import Resorts from "../pages/Resorts";
import Voos from "../pages/Voos";

export default function AllRoutes() {
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/voos" element={<Voos/>}/>
        <Route path="/pacotes" element={<Pacotes/>}/>
        <Route path="/promo" element={<Promos/>}/>
        <Route path="/resort" element={<Resorts/>}/>
    </Routes>
    );
}
