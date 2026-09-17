import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface boxPosition {
    position: number;
    setPosition: (value: number) => void;
}

function ShoveBoxButton({ position, setPosition }: boxPosition) {
    return (
        <Button
            onClick={() => {
                setPosition(4 + position);
            }}
        >
            Shove the Box
        </Button>
    );
}

interface moveBoxProps {
    position: number;
}

function MoveableBox({ position }: moveBoxProps): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <MoveableBox position={position}></MoveableBox>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
            </div>
        </div>
    );
}
