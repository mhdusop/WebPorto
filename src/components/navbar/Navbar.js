import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default class Navbar extends Component {
    render(){
        return(
            <div className="mt-4 pt-2">
                <div className="d-flex justify-content-center">
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

                    <NavLink to="/skill" className={"nav-link"}
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                        })}
                    > Skills
                    </NavLink>

                    <NavLink to="/contact" className={"nav-link"}
                        style={({ isActive }) => ({
                            color: isActive ? '#fff' : '#545e6f',
                        })}
                    > Contact
                    </NavLink>
                    
                </div>
            </div> 
        )
    }
}