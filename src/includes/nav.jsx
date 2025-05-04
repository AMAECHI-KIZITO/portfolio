import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (

        <div className="menu my-4">
            <a className="d-none d-md-flex" href="#Skills" aria-label="View my skills" style={{textDecoration:"none", color:"#198753", fontWeight:"bolder"}}>
                SKILLS
            </a>
            <a className="d-md-none" href="#skills" aria-label="View my skills" style={{textDecoration:"none", color:"#198753", fontWeight:"bolder"}}>
                SKILLS
            </a>
            <a href="#myProjects" aria-label="Go to projects" style={{textDecoration:"none", color:"#198753", fontWeight:"bolder"}}>
                PROJECTS
            </a>
            <a href="#contactMe" aria-label="Go to contact section" style={{textDecoration:"none", color:"#198753", fontWeight:"bolder"}}>
                CONTACT
            </a>
        </div>
    )
}

export default Navigation;