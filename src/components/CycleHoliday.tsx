import React, { useState } from "react";
import { Button } from "react-bootstrap";

type holidays =
    | "Holiday: ⚫️"
    | "Holiday: 🪦"
    | "Holiday: 🌮"
    | "Holiday: 🐰"
    | "Holiday: 🍀";

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<holidays>("Holiday: ⚫️");

    function byAlphabet() {
        setHoliday(
            holiday === "Holiday: ⚫️" ? "Holiday: 🪦"
            : holiday === "Holiday: 🪦" ? "Holiday: 🌮"
            : holiday === "Holiday: 🌮" ? "Holiday: 🐰"
            : holiday === "Holiday: 🐰" ? "Holiday: 🍀"
            : "Holiday: ⚫️",
        );
    }
    function byYear() {
        setHoliday(
            holiday === "Holiday: ⚫️" ? "Holiday: 🪦"
            : holiday === "Holiday: 🪦" ? "Holiday: 🌮"
            : holiday === "Holiday: 🌮" ? "Holiday: 🐰"
            : holiday === "Holiday: 🐰" ? "Holiday: 🍀"
            : "Holiday: ⚫️",
        );
    }

    return (
        <div>
            Cycle Holiday
            <Button onClick={byAlphabet}>Advance by Alphabet</Button>
            <Button onClick={byYear}>Advance by Year</Button>
            {holiday}
        </div>
    );
}
