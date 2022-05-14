import React from "react";

export default function ShowComment ({comments}) {
    if (comments.length > 0) {
        return (
            <>
                <h2>Комментарии</h2>
                <ul>
                    {comments && 
                    comments.map(({id, userName, comment}) => (
                        <li key={id}>
                            <b>{userName}</b>
                            <p>{comment}</p>
                        </li>
                    ))}
                </ul>
            </>
        );
    }

    return (
        <>
            <h2>Комментариев нуль</h2>
        </>
    )
}