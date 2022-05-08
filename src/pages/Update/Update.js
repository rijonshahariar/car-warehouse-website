import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import './Update.css'

const Update = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    const localCarId = parseInt(localStorage.getItem(id));
    const localSoldId = parseInt(localStorage.getItem(`sold${id}`));
    const [newQuantity, setNewQuantity] = useState(localCarId);
    const [sold, setSold] = useState(localSoldId);

    useEffect(() => {
        const url = `https://powerful-shelf-07443.herokuapp.com/cars/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCar(data));
    }, []);

    const handleDeliver = (e) => {
        e.preventDefault();
        setSold(sold + 1);
        if (newQuantity > 0) {
            setNewQuantity(newQuantity - 1);
            localStorage.setItem(car._id, newQuantity - 1);
            localStorage.setItem(`sold${id}`, sold + 1);
        }
        const updatedQuantity = { quantity: localCarId - 1, sold: sold + 1 };

        // send data to the server
        const url = `https://powerful-shelf-07443.herokuapp.com/cars/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                toast("Successfully Delivered!");
                e.target.reset();
            })
    }

    const handleStockCar = (e) => {
        e.preventDefault();
        const stockQuantity = parseInt(e.target.stockQuantity.value);
        localStorage.setItem(car._id, stockQuantity + localCarId);
        setNewQuantity(stockQuantity + localCarId);
        const UpdatedQuantity = { quantity: stockQuantity + localCarId, sold: sold };
        // send data to the server
        const url = `https://powerful-shelf-07443.herokuapp.com/cars/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                toast("Stock added successfully!");
                e.target.reset();
            })
    }

    return (
        <div>
            <Container>
                <Row>
                    <div className="mx-auto">
                        <Row>
                            <div className="col-md-5">
                                <h2 className="text-center my-5">
                                    Update Your{" "}
                                    <span className="car-name">{`${car.name}`}</span>
                                </h2>
                                <img
                                    src={car.img}
                                    width="400"
                                    alt=""
                                    className="d-inline-block mx-auto"
                                />
                                <Form onSubmit={handleDeliver}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Model:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={car.name}
                                            readOnly
                                            disabled
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Supplier:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={car.supplier}
                                            readOnly
                                            disabled
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Car ID:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={car._id}
                                            readOnly
                                            disabled
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Price:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={car.price}
                                            readOnly
                                            disabled
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicDescription">
                                        <Form.Label>Description:</Form.Label>
                                        <br />
                                        <textarea
                                            className="w-100"
                                            rows="5"
                                            value={car.description}
                                            readOnly
                                            disabled
                                        ></textarea>

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="text" value={newQuantity} readOnly />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Sold</Form.Label>
                                        <Form.Control type="text" value={sold} readOnly />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        {newQuantity ? (
                                            <Button
                                                // onClick={handleDeliver}
                                                className="btn btn-lg submitbtn"
                                                type="submit"
                                            >
                                                Delivered
                                            </Button>
                                        ) : (
                                            <button className="btn btn-lg submitbtn" disabled>
                                                Sold out
                                            </button>
                                        )}
                                    </Form.Group>
                                </Form>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                <h2 className="text-center my-5">Re-stock Your Car</h2>
                                {/* <img src={} alt="" /> */}
                                <Form onSubmit={handleStockCar}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="text" name="stockQuantity" />
                                    </Form.Group>
                                    <Button className='btn submitbtn' type="submit">
                                        Stock
                                    </Button>
                                </Form>
                                <div className="d-flex justify-content-center align-items-center">
                                    <Link className="btn submitbtn" to="/manage">
                                        Manage Inventories
                                    </Link>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Update;
