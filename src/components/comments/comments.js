import React from "react";
import Button from "../button/button";

export default function ShowComment ({comments}) {
    if (comments.length > 0) {
        return (
            <>
                <ul>
                    {comments && 
                    comments.map(({id, userName, comment}) => (
                        <li key={id}>
                            <b>{userName}</b>
                            <p>{comment}</p>
                        </li>
                    ))}
                </ul>
                <Button>Показать Ещё</Button>
            </>
        );
    }

    return (
        <>
            <h2>Комментариев нуль</h2>
        </>
    )
}