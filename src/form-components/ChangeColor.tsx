import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "green",
    "yellow",
    "blue",
    "pink",
    "orange",
    "purple",
    "magenta",
    "black",
];

export function ChangeColor(): React.JSX.Element {
    const [colors, setColors] = useState<string>(COLORS[0]);

    return (
        <>
            <div>
                <h3>Change Color</h3>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        value={color}
                        type={"radio"}
                        name="colors"
                        onChange={() => {
                            setColors(color);
                        }}
                        label={color}
                        checked={colors === color}
                    />
                ))}
            </div>

            <div style={{ backgroundColor: colors }} data-testid="colored-box">
                {colors}
            </div>
        </>
    );
}
