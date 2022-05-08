import React from "react";
import { Accordion, Row } from "react-bootstrap";

const Blog = () => {
    return (
        <div className="container vh-100">
            <Row>
                <div className="mt-5">
                    <h2 className="my-5 text-center">Question and Answer</h2>
                    <div>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <h5 className="p-0 m-0 section-title">
                                        Difference between javascript and node js?
                                    </h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    1. Javascript is a programming language that is used for
                                    writing scripts on the website where NodeJS is a Javascript
                                    runtime environment.
                                    <br />
                                    2. Javascript basically used on the client-side and NodeJS mostly
                                    used on the server-side. <br />
                                    3. Javascript is capable enough to add HTML and play with the
                                    DOM and Nodejs can't add HTML tags.
                                    <br />
                                    4. Javascript can only be run in the browsers and we can run
                                    Javascript outside the browser with the help of NodeJS.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <h5 className="p-0 m-0 section-title">
                                        Differences between Sql and NoSql databases?
                                    </h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    1. Sql is a relational database management system (RDBMS) and
                                    NoSql is a non-relational or distributed database system.
                                    <br />
                                    2. Sql databases have fixed or static schema and
                                    NoSql have dynamic schema.
                                    <br />
                                    3. Sql database is Vertically Scalable and NoSql database is
                                    Horizontally scalable.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <h5 className="p-0 m-0 section-title">
                                        When should you use nodejs and when should you use mongodb?
                                    </h5>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        We should use Nodejs when any project needs a programming
                                        environment and a runtime library that offers you basic
                                        programming tools/support and can compile and/or interpret
                                        your code. Nodejs is such as tool for the Javascript
                                        programming language.
                                    </p>
                                    <p>
                                        MongoDB is a database engine which should use when
                                        any application needs the ability to persistently store data
                                        in a way that can be efficiently query,
                                        then you would typically use some form of database. There
                                        are dozens of popular databases. MongoDB is one of them.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Blog;
