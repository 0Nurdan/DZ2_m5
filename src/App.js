import React from 'react';
import { Route, NavLink, useNavigate, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Photo from "./pages/Photo";
import PhotoDetail from "./components/PhotoDetail";

function App() {
    const navigate = useNavigate();
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active" exact>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                    <input type="text" name="search" placeholder="Search photos..." />
                    <button type="submit">Search</button>
            </nav>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/photo" exact>
                    <Photo />
                </Route>
                <Route path="/photo/:id">
                    <PhotoDetail />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
