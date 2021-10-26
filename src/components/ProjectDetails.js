import React from 'react'
import './ProjectDetails.css'

import Adata from '../Adata'

function ProjectDetails(props) {
    const id = props.match.params.id - 1
    const imgsrc = Adata[id].imgsrc
    return (
        <div className="container-fluid project-details">
            <div className="project-cover">

            </div>
            <div className="row mt-3">
                <div className="detail-bar col-lg-4">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sint accusantium, iusto omnis velit animi dignissimos quisquam fugiat corrupti, necessitatibus totam quia similique alias consectetur modi quo ratione cupiditate explicabo doloremque dicta officiis, doloribus sequi labore consequatur? Voluptas adipisci doloribus totam laudantium! Veritatis reiciendis dolorum illum provident minus dolorem debitis.</p>
                </div>
                <div className="detail-body col-lg-8 row">
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                    <div className="card col-lg-4 mb-3">
                        <img src={imgsrc} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
