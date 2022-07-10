import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import Pacotes from "./pages/Pacotes";
import Voos from "./pages/Voos";
import Home from "./pages/Home";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/pacotes" exact component={Pacotes} />
            <Route path="/pacotes" exact component={Voos} />
        </Routes>
    );
}

