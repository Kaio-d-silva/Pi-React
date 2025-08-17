import { RouteConfig } from "../config/route"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "../config/route";
import React from "react";

const renderRoutes = (routes: RouteConfig[]) => {
    return routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
            {route.children && renderRoutes(route.children)}
        </Route>
    ))
}


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                {renderRoutes(routes)}
            </Routes>
        </Router>
    )
} 

export default App;