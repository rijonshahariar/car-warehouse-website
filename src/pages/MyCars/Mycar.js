import React from "react";
import { useNavigate } from "react-router-dom";

const MyCar = ({ myCar, children }) => {
    const navigate = useNavigate();
    const handleInventory = () => {
        navigate(`/update/${myCar._id}`);
        localStorage.setItem(myCar._id, myCar.quantity);
        localStorage.setItem(`sold${myCar._id}`, parseInt(myCar.sold));
    };
    return (
        <div className="col">
            <div className="card h-100 border-bottom-0">
                <div className="position-relative">
                    <img
                        src={myCar.img}
                        className="card-img-top img-fluid"
                        alt={myCar.name}
                    />
                    <span className="position-absolute d-inline-block top-0 end-0 price">
                        Price: ${myCar.price}
                    </span>
                    <span className=" fw-bold mx-auto p-2 text-light supply">
                        Supplier: {myCar.supplier}
                    </span>
                </div>
                <div className="card-body mt-3">
                    <h3 className="car-name card-title fw-bold text-center mb-3">
                        {myCar.name}
                    </h3>
                    <div className="d-flex justify-content-between">


                    </div>
                    <p className="card-text mt-3">{myCar.description}</p>
                </div>
                <h6 className=" mx-auto quantity p-2 text-light">
                    Quantity: {myCar.quantity}
                </h6>
                <div className="p-2 text-light">
                    {children}
                </div>

                <div className="px-2">
                    <button onClick={handleInventory} className="w-100 btn managebtn">
                        UPDATE CAR
                    </button>


                </div>

            </div>
        </div>
    );
};

export default MyCar;
