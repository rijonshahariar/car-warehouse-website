import React from "react";
import { useNavigate } from "react-router-dom";
import './CarItem.css'

const CarItem = ({ car }) => {
    const navigate = useNavigate();

    const handleInventory = () => {
        navigate(`/update/${car._id}`);
        localStorage.setItem(car._id, car.quantity, car.email);
        localStorage.setItem(`sold${car._id}`, parseInt(car.sold));
    };
    return (
        <div className="col">
            <div className="card h-100 ">
                <div className="position-relative">
                    <img
                        src={car.img}
                        className="card-img-top img-fluid"
                        alt={car.name}
                    />
                    <span className="position-absolute d-inline-block top-0 end-0 price">
                        Price: ${car.price}
                    </span>
                    <span className=" fw-bold mx-auto p-2 text-light supply">
                        Supplier: {car.supplier}
                    </span>
                </div>
                <div className="card-body mt-3">
                    <h3 className="car-name card-title fw-bold text-center mb-3">
                        {car.name}
                    </h3>
                    <div className="d-flex justify-content-between">


                    </div>
                    <p className="card-text mt-3">{car.description}</p>
                </div>
                <h6 className=" mx-auto quantity p-2 text-light">
                    Quantity: {car.quantity}
                </h6>
                <div className="card-footer border-0 px-2">
                    <button onClick={handleInventory} className="w-100 btn managebtn">
                        STOCK UPDATE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarItem;
