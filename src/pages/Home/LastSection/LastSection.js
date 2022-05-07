import React from 'react';
import { Link } from 'react-router-dom';
import iconfour from '../../../images/icons/iconfour.svg'
const LastSection = () => {
    return (
        <div>
            <div className="container px-4 py-3">
                <div className="feature col">
                    <h2 className="text-center  pb-1">All The Information You Need</h2>
                    <div className="pb-3 text-center">
                        <p>On our blog, you’ll discover in-depth resources and guidance that’ll help you navigate every step of your car buying process.</p>
                    </div>
                    <h5 className="text-center">
                        <Link
                            className="w-50 btn managebtn"
                            to="/blog"
                        >
                            VISIT BLOG
                        </Link>
                    </h5>
                </div>
                <div className="text-center order-last col-sm-12 col-md-6 offset-md-3">
                    <div className="img-container img-container-block">
                        <img src={iconfour} alt="" className="w-100"></img>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LastSection;