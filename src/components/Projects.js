import React from "react";

function Projects(props){
    return(
        <div className="card" >
            <img className="card-img-top img-fluid" src={props.imageSRC} alt={props.alt} />
            <div className="card-body">
                <h3>{props.title}</h3>
                <a href= {props.deployedLink} className= "site-link">Deployed Site</a>
                <br></br>
                <a href= {props.gitHub} >GitHub Repo</a>
            </div>
        </div>
    )
}

export default Projects;