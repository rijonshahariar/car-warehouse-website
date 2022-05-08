import React from "react";
import { useNavigate } from "react-router-dom";
import useCars from "../../hooks/useCars";
import ManageInventory from "../ManageInventory/ManageInventory";

const ManageInventories = () => {
    const [cars, setCars] = useCars();
    const navigate = useNavigate();

    const handleDelete = id => {
        const confirmation = window.confirm('Are you sure to delete this item?');
        if (confirmation) {
            const url = `https://powerful-shelf-07443.herokuapp.com/cars/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remains = cars.filter(car => car._id !== id);
                    setCars(remains);
                })
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="my-5">Manage Your inventory</h2>
                            </div>
                            <div className="col-md-4 text-end">
                                <button
                                    onClick={() => navigate("/addcar")}
                                    className="btn managebtn mt-5"
                                >
                                    Add Car
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column">
                {cars.map((car) => (
                   
                ))}
            </div>
        </div>
    );
};

export default ManageInventories;
