import React from "react";
import { Ul } from "../elements";
import { CommentsLi, CommentsButton, Name, Text } from "./styled";

export default function ShowComment ({comments}) {
    if (comments.length > 0) {
        return (
            <>
                <Ul>
                    {comments && 
                    comments.map(({id, userName, comment}) => (
                        <CommentsLi key={id}>
                            <Name>{userName}</Name>
                            <Text>{comment}</Text>
                        </CommentsLi>
                    ))}
                </Ul>
                <CommentsButton>Показать Ещё</CommentsButton>
            </>
        );
    }

    return (
        <>
            <h2>Комментариев нуль</h2>
        </>
    )
}