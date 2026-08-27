import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript Hello World
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Davin Dennis
                </p>
            </div>
            <div>
                <h1> Task 3</h1>
                <img
                    src="https://cdn-aicin.nitrocdn.com/HIAjYmsdLpRQdKpIMJLXFmZsSAYnEnkl/assets/images/optimized/rev-c2c8836/www.amitree.com/wp-content/uploads/2021/12/what-is-a-task-tracker-and-why-you-need-one.jpeg"
                    alt="A picture with 3 columns, one labeled to do, second one in progress, and the third is labels done"
                />
                Ordered List:
                <ol>
                    <li>First Tasks</li>
                    <li>Second Tasks</li>
                    <li>Third Tasks</li>
                </ol>
            </div>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                {" "}
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 10,
                                height: 10,
                            }}
                        ></div>
                        First Column
                    </Col>

                    <Col>
                        {" "}
                        <div
                            style={{
                                backgroundColor: "red",
                                width: 10,
                                height: 10,
                            }}
                        ></div>
                        Second Column
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
