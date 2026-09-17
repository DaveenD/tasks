import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);

    function flipVis(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <Button onClick={flipVis}>Reveal Answer</Button>
            {!visible && 42}
        </div>
    );
}
