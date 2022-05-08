import React from "react";
import { Link } from "react-router-dom";
import useCars from "../../../hooks/useCars";
import CarItem from "../CarItem/CarItem";
import "./FeaturedCar.css";

const FeaturedCar = () => {
    const [cars] = useCars();
    const inStock = cars.filter((car) => car.quantity > 0);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1 className="section-title text-center my-5 fw-bold">
                    <span className="d-inline-block border-bottom border-primary border-2">
                        FEATURED CARS
                    </span>
                </h1>
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-3">
                    {inStock.slice(0, 6).map((car) => (
                        <CarItem key={car._id} car={car}></CarItem>
                    ))}
                </div>
                <div className="mb-5">
                    <h5 className="text-center">
                        <Link
                            className="btn manage-all-btn fw-bold p-3"
                            to="/manage"
                        >
                            MANAGE INVENTORIES
                        </Link>
                    </h5>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default FeaturedCar;
