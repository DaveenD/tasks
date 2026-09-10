import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceOne, setDiceOne] = useState<number>(0);
    const [diceTwo, setDiceTwo] = useState<number>(1);

    function setLeftDice(): void {
        setDiceOne(d6);
    }

    function setRightDice(): void {
        setDiceTwo(d6);
    }

    return (
        <div>
            <Button onClick={setLeftDice}>Roll Left</Button>{" "}
            <span data-testid="left-die">{diceOne}</span>
            <Button onClick={setRightDice}>Roll Right</Button>{" "}
            <span data-testid="right-die">{diceTwo}</span>
            {diceOne === diceTwo && diceOne === 1 ?
                <div>Lose</div>
            : diceOne === diceTwo ?
                <div>Win</div>
            :   <div></div>}
        </div>
    );
}
