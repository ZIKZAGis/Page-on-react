import Button from "../button/button";
import {Value, StyledCounter} from "./styled"

export default function Counter () {
    return (
        <StyledCounter>
            <Button size='small'>-</Button>
            <Value>1</Value>
            <Button size='small'>+</Button>
        </StyledCounter>
    )
}