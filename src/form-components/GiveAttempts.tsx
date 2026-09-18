import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function updateAttempts(e: React.ChangeEvent<HTMLInputElement>) {
        const checkAttempts =
            !Number.isNaN(parseInt(e.target.value)) ?
                parseInt(e.target.value)
            :   requestedAttempts;
        setRequestedAttempts(checkAttempts);
    }
    const [total, setTotal] = useState<number>(3);

    return (
        <div>
            <h3>Give Attempts: {total}</h3>
            <Form.Group controlId="fromAttemptsLeft" />
            <Form.Label>Attempts Left:</Form.Label>
            <Form.Control
                type="number"
                value={requestedAttempts}
                onChange={updateAttempts}
            />
            <Button
                onClick={() => {
                    setTotal(total - 1);
                }}
                disabled={total <= 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    setTotal(total + requestedAttempts);
                }}
            >
                Gain
            </Button>
        </div>
    );
}
