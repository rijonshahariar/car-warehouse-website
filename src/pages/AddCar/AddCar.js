import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button, Container, Form, Row } from "react-bootstrap";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const AddCar = () => {
    const [user] = useAuthState(auth);

    const handleAddCar = (e) => {
        e.preventDefault();
        const carObj = {
            name: e.target.name.value,
            supplier: e.target.supplier.value,
            email: user.email,
            price: parseInt(e.target.price.value),
            quantity: parseInt(e.target.quantity.value),
            description: e.target.description.value,
            img: e.target.image.value,
            sold: parseInt(e.target.sold.value),
        };
        fetch('http://localhost:5000/cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(carObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Car Added Successfully!');
                e.target.reset();
            })
    }
    return (
        <div>
            <Container>
                <Row>
                    <div className="col-md-6 mx-auto">
                        <h2 className="my-5 text-center">Add New Car</h2>
                        <Form onSubmit={handleAddCar}>
                            <Form.Group className="mb-3" controlId="formBasicModel">
                                <Form.Label>Car Model</Form.Label>
                                <Form.Control type="text" name="name" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicSupplier">
                                <Form.Label>Supplier Name</Form.Label>
                                <Form.Control type="text" name="supplier" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    value={user.email}
                                    readOnly
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" name="price" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" name="quantity" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <br />
                                <textarea
                                    className="w-100"
                                    rows="5"
                                    name="description"
                                    required
                                ></textarea>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="text" name="image" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label>Sold</Form.Label>
                                <Form.Control type="number" name="sold" required />
                            </Form.Group>

                            <Button type="submit" className="w-100 fw-bold managebtn mb-5">
                                SUBMIT
                            </Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default AddCar;
