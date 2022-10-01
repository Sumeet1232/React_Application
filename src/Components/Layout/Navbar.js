import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container">

                <a class="navbar-brand" href="/">React User</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink className="nav-link" exact to="/Home" >Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" exact to="/About" >About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" exact to="/Contact" >ContactUs</NavLink>
                        </li>
                    </ul>

                </div>

                <Link exact to="/AddUser" className="btn btn-outline-light">Add User</Link>
            </div>
        </nav>
    );
};

export default Navbar;