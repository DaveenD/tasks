import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    incrementColorIndex: () => void;
}

function ChangeColor({
    incrementColorIndex,
}: ChangeColorProps): React.JSX.Element {
    return <Button onClick={incrementColorIndex}>Next Color</Button>;
}

interface colorIndexProp {
    colorIndex: number;
}

function ColorPreview({ colorIndex }: colorIndexProp): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function incrementColorIndex(): void {
        setColorIndex((prevIndex) => {
            return (prevIndex + 1) % COLORS.length;
        });
    }
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    incrementColorIndex={incrementColorIndex}
                ></ChangeColor>
                <ColorPreview colorIndex={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
