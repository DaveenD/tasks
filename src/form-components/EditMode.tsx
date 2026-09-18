import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [text, setText] = useState<string>("Your Name");

    const [edit, setEdit] = useState<boolean>(false);

    const [user, setUser] = useState<boolean>(true);

    function updateEdit(e: React.ChangeEvent<HTMLInputElement>) {
        setEdit(e.target.checked);
    }

    function updateText(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value);
    }

    function updateUser(e: React.ChangeEvent<HTMLInputElement>) {
        setUser(e.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-check"
                label="Edit?"
                checked={edit}
                onChange={updateEdit}
            />

            <div>
                {edit ?
                    <div>
                        <Form.Check
                            type="checkbox"
                            id="student-check"
                            label="Student"
                            checked={user}
                            onChange={updateUser}
                        />
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={text}
                            onChange={updateText}
                        />
                    </div>
                : user ?
                    `${text} is a student`
                :   `${text} is not a student`}
            </div>
        </div>
    );
}
