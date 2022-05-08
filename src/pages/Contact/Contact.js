import React from "react";
import { Button, Form } from "react-bootstrap";

const Contact = () => {
    return (
        <div className="d-flex justify-content-center align-items-center height-control">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h2 className="mb-3 text-center">Contact Us</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicSubject">
                                <Form.Control type="text" placeholder="Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicMessage">
                                <textarea
                                    name=""
                                    id=""
                                    rows="10"
                                    className="w-100"
                                    placeholder="Write Your Message"
                                    style={{ resize: "none", padding: '10px' }}
                                ></textarea>
                            </Form.Group>
                            <Button className="btn submitbtn" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
