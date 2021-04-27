import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import image from "./googlebooks.png";

function Navbar() {
    return (


        <nav className="navbar navbar-expand-lg text-light">
            <div className="container">
            <a className="navbar-brand" href="/"><img src={image}  height="50px" width="180px"  alt=""/></a>
                {/* <Link className="navbar-brand" to="/"> </Link> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/search"
                            className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                        > Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/saved"
                            className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                        >Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;