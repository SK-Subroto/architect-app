import React from 'react'
import './Projects.css'
import Project from './Project'
import Adata from '../Adata'


function Projects() {
    return (
        <div className="container-fluid projects">
            <div className="cover">
                <div className="cover-note">
                    <h1>Book Hourse Annex</h1>
                    <h4>By Subroto + Prosenjit</h4>
                </div>
            </div>
            <div className="row mt-4">
                <div className="project-div col-lg-9 row">
                    {Adata.map((val, ind) => {
                        return <Project key={ind} id={val.id} imgsrc={val.imgsrc} title={val.title} author={val.author} />
                    })}
                </div>
                <div className="project-sidebar col-lg-3">
                    <input class="form-control mb-5" type="search" placeholder="Search" aria-label="Search" />
                    <ul class="list-group">
                        <li class="list-group-item active" aria-current="true">An active item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Projects
