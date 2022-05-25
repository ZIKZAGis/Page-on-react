import React from "react";
import { Ul } from "../elements";
import { CommentsLi, CommentsButton, Name, Text } from "./styled";

export default function ShowComment ({comments, onShowMore, allCommentsLength}) {
    if (comments.length > 0) {
        return (
            <>
                <Ul>
                    {comments.map(({id, userName, comment}) => (
                        <CommentsLi key={id}>
                            <Name>{userName}</Name>
                            <Text>{comment}</Text>
                        </CommentsLi>
                    ))}
                </Ul>
                {allCommentsLength > comments.length && (
                    <CommentsButton onClick={onShowMore}>Показать ещё</CommentsButton>
                )}
            </>
        );
    }

    return (
        <>
            <h2>Комментариев нуль</h2>
        </>
    )
}