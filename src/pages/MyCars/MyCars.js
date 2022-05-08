import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useCars from '../../hooks/useCars';
import MyCar from './Mycar';
import './Mycars.css'
const MyCars = () => {
    const [user] = useAuthState(auth);
    // const [mycars, setMyCars] = useCars();

    // fetch('http://localhost:5000/cars', {
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         const remaining = mycars.filter(car => car.email === user.email);
    //         setMyCars(remaining);
    //     })
    const [cars, setMycars] = useCars();
    const myCollection = cars.filter((car) => car.email === user.email);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete this item?');
        if (proceed) {
            const url = `http://localhost:5000/cars/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = cars.filter((myCar) => myCar._id !== id);
                    setMycars(remaining);
                })
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="mb-5">
                    <h2 className="section-title text-center my-5 fw-bold">
                        <span className="d-inline-block border-bottom border-danger border-2">
                            YOU ADDED <span className="text-danger">{myCollection.length}</span> CARS
                        </span>
                    </h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {myCollection.map((myCar) => (
                            <MyCar key={myCar._id} myCar={myCar}>
                                <button
                                    className="w-100 btn deletebtn "
                                    onClick={() => handleDelete(myCar._id)}
                                >
                                    DELETE CAR
                                </button>
                            </MyCar>
                        ))}

                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default MyCars;