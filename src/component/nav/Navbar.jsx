import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const [menuCollapsed, setMenuCollapsed] = useState(true);

    const handleCategoryClick = () => {
        setMenuCollapsed(true);
    };

    return (
        <div><nav className={`navbar navbar-expand-lg fixed-top  navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <div className="navbar-brand">{props.title}</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/news/general">General</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news/business">Business</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news/entertainment">Entertainment</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news/health">Health</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news/science">Science</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news/sports">Sports</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news/technology">Technology</NavLink></li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                            
                          
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input
                                className="form-check-input mx-2"
                                onClick={props.toggleMode}
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                            />
                            <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">
                                Enable Dark Mode
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
