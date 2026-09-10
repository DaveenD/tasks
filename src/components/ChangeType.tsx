import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function decide() {
        setType(
            type === "short_answer_question" ?
                "multiple_choice_question"
            :   "short_answer_question",
        );
    }

    return (
        <div>
            Change Type:
            <Button onClick={decide}>Change Type</Button>{" "}
            {type === "short_answer_question" ?
                <span>Short Answer</span>
            :   <span>Multiple Choice</span>}
        </div>
    );
}
