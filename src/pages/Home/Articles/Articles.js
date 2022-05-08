import React from 'react';
import one from '../../../images/blogs/one.jpg'
import two from '../../../images/blogs/two.jpg'
import three from '../../../images/blogs/three.jpg'


const Articles = () => {
    return (
        <div className="container">
            <h1 className="section-title text-center my-5 fw-bold">
                <span className="d-inline-block border-bottom border-primary border-2">
                    RECENT ARTICLES
                </span>
            </h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-5 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <img src={one} alt="" className="w-100"></img>
                        <div className="card-body">
                            <h3>How long does it take to charge an electric car?</h3>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm managebtn">Read More</button>

                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img src={two} alt="" className="w-100"></img>
                        <div className="card-body">
                            <h3>Your rights when buying a used car</h3>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm managebtn">Read More</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                        <img src={three} alt="" className="w-100"></img>

                        <div className="card-body">
                            <h3>What is the Mini Chili Pack? Is it worth it?</h3>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm managebtn">Read More</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>

    );
};

export default Articles;