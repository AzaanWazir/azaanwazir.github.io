import React from "react";
import "./Projects.css";
import Portfolio from './ProjectSnippets/Portfolio';

const Projects = (props) => {
    return (
        <div className="projects">
            <h1 className="sectionHeader">Projects</h1>
            <Portfolio></Portfolio>
        </div>
    )
}

export default Projects