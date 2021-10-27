import CCSS from './Card.module.css'
import image1 from '../Images/food1.jpg';
import React, { Component, useState } from 'react';

const Card = () => {
    const [showText, setShowText] = useState(false);

    var btnText = "Show more";

    const changeText = () => {
        if (btnText == "Show more") btnText = "Close";
        else btnText = "Show more";
    }

    return (
        <div>
            <div className={`card mb-3 ${CCSS.card}`}>
                <div className="row g-0 ">
                    <div className="col-md-4">
                        <img src={image1} className={`img-fluid rounded-start ${CCSS.img}`} alt="" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia assumenda modi voluptates velit eum, doloribus</p>
                            <p className="card-text"><small className="text-muted">Gulmohar restaurant</small></p>
                        </div>
                    </div>
                </div>
                <div className={CCSS['btn-container']}><button type="button" id="expand" className={`${CCSS['custom-btn']} ${CCSS.btn} ${CCSS.button}`} onClick={() => { setShowText(!showText); changeText(); }}>{btnText}</button></div>
                {showText && <div className={CCSS.expand}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae mollitia assumenda modi voluptates velit eum, doloribus voluptatem maiores deleniti laborum dolore ducimus, aperiam id laboriosam, rerum beatae sed. Rerum, exercitationem.</div>}
            </div>
        </div>
    )
}

export default Card
