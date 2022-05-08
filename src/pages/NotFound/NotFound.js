import React from "react";
import { Link } from "react-router-dom";
import img404 from "../../images/notfound.jpg";

const NotFound = () => {
    return (
        <div className="container">
            <div className="text-center mt-5 height-control">

                <img className="w-50" src={img404} alt="404" />
            </div>

        </div>
    );
};

export default NotFound;