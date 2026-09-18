import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group className="check-answer" controlId="fromBasicAnswer" />
            <Form.Label>Answer:</Form.Label>

            {answer === expectedAnswer ? "✔️" : "❌"}
            <Form.Control
                type="text"
                onChange={updateAnswer}
                value={answer}
            ></Form.Control>
        </div>
    );
}
