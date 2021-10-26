import React from 'react'
import './Project.css'

import { Link } from "react-router-dom";

function Project({ id, imgsrc, title, author }) {
    return (
        <div className="card col-lg-4 mb-3">
            <Link to={`/detail/${id}`}>
                <img src={imgsrc} class="card-img-top" alt="..."></img>
                <div className="img-caption">
                    <p>{title} <br /> <span>By {author}</span></p>
                </div>
            </Link>   
        </div>
    )
}

export default Project
