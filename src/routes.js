import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useRouteMatch, useParams } from "react-router-dom";

import Pacotes from "./pages/Pacotes";
import Voos from "./pages/Voos";
import Home from "./pages/Home";
import Resorts from "./pages/Resorts";
import Promos from "./pages/Promos";

export default function Rotas() {
    return (
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/Pacotes" exact component={Pacotes} />
            <Route path="/Voos" exact component={Voos} />
            <Route path="/Promos" exact component={Promos} />
            <Route path="/Resorts" exact component={Resorts} />
        </Routes>
    );
}

