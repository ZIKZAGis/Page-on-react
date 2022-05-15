import styled from 'styled-components'

const StyledDiv = styled.div`
    width: ${(props) => props.width || 200}px;
    height: ${(props) => props.height || 200}px;
    background-color: ${(props) => (props.isRed ? 'red' : 'green')};
    color: ${(props) => (props.isRed ? 'white' : props.color)}
`;

export default function Test (props) {
    return (
        <>
            <StyledDiv {...props}>
                <p>Этот блок {props.isRed ? 'красный' : 'зеленый'}</p>
            </StyledDiv>
        </>
    )
}