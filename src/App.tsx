import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <Container>
            <Row>
                <Col>
                    First Column.
                    <img
                        src="https://png.pngtree.com/png-vector/20250115/ourmid/pngtree-super-bowl-design-png-image_15187614.png"
                        alt="A Picture Of A Football With A Label That Says Super Bowl"
                    />
                    <div
                        className="RectangleOne"
                        style={{
                            backgroundColor: "red",
                            width: 100,
                            height: 500,
                        }}
                    ></div>
                </Col>
                <Col>
                    Second Column.
                    <ul>
                        <li>Finish Task 3</li>
                        <li>Finish Task 4</li>
                        <li>Finish Task 5</li>
                    </ul>
                    <div
                        className="RectangleTwo"
                        style={{
                            backgroundColor: "red",
                            width: 100,
                            height: 500,
                        }}
                    ></div>
                </Col>
            </Row>
            <div className="App">
                <div style={{ backgroundColor: "lightblue" }}>
                    <header className="App-header">
                        UD CISC275 with React Hooks and TypeScript
                    </header>
                </div>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload. Davin Dennis ,Hello World
                </p>
            </div>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
        </Container>
    );
}

export default App;
