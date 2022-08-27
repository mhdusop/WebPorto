import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
                <div className="container-fluid">
                    <button className="navbar-toggler navbar-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light" style={{color : "#fff"}}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto text-center ">
                            <NavLink to="/" className={"nav-link"} 
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#545e6f',
                                })}
                            > Home 
                            </NavLink>

                            <NavLink to="/project" className={"nav-link"}
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#545e6f',
                                })}
                            > Projects
                            </NavLink>
                        
                            {/* <NavLink to="/skill" className={"nav-link"}
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#545e6f',
                                })}
                            > Skills
                            </NavLink> */}

                            <NavLink to="/contact" className={"nav-link"}
                                style={({ isActive }) => ({
                                    color: isActive ? '#fff' : '#545e6f',
                                })}
                            > Contact
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
            
        )
    }
}