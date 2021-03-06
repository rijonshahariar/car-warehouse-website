import React from 'react';
import iconone from '../../../images/icons/iconone.svg'
import icontwo from '../../../images/icons/icontwo.svg'
import iconthree from '../../../images/icons/iconthree.svg'

import './OurService.css'

const OurService = () => {
    return (
        <div className='container'>
            <h1 className="section-title text-center my-5 fw-bold">
                <span className="d-inline-block border-bottom border-primary border-2">
                    WHY CHOOSE US?
                </span>
            </h1>

            <div className=" px-4 py-3" id="featured-3">

                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon p-2 mb-2">
                            <img className="d-block w-50 mx-auto" src={iconone} alt="icon" />
                        </div>

                        <h4 className='fw-bold text-center text-secondary'>Build Your Deal With Confidence</h4>
                        <p className='text-center'>Get a personalized offer from a dealer online, including manufacturer incentives and discounts. Next, build a custom deal that includes the value of your trade-in and monthly payments.</p>


                    </div>
                    <div className="feature col">
                        <div className="feature-icon p-2 mb-2">
                            <img className="d-block w-50 mx-auto" src={icontwo} alt="icon" />
                        </div>

                        <h4 className='fw-bold text-center text-secondary'>Choose From Close to a Million Cars</h4>
                        <p className='text-center'>Get access to our extensive selection of pre-owned vehicles for sale across the US, and see price ratings based on similar used car listings in your area.</p>


                    </div>
                    <div className="feature col">
                        <div className="feature-icon p-2 mb-2">
                            <img className="d-block w-50 mx-auto" src={iconthree} alt="icon" />

                        </div>
                        <h4 className='fw-bold text-center text-secondary'>Get Trade-in Offer You Can Use</h4>
                        <p className='text-center'>Answer a few questions to see your car???s market value and get a cash offer in minutes. Cash out, or trade in for a new or used car.</p>

                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default OurService;