import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function startQuiz() {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    function stopQuiz() {
        setProgress(false);
    }

    function Mulligan() {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            Start Attempts: {attempts}
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={Mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
