import styled from "styled-components"

const StyledH1 = styled.h1`
    display: block;
    width: 250px;
    padding: 5px;
    border: 1px solid red;
    color: red;
    text-align: center;
    margin: 0 auto;
`;

const LeftStyledH1 = styled(StyledH1)`
    color: blue;
    margin-left: 0;
`;

const RightStyledH1 = styled(StyledH1)`
    color: green;
    margin-right: 0;
`;

export default function Title ({children}) {
    return (
        <>
            <StyledH1>{children}</StyledH1>
            <LeftStyledH1>Левый заголовок</LeftStyledH1>
            <RightStyledH1>Правый заголовок</RightStyledH1>
        </>
    )
}