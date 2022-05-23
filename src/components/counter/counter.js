import Button from "../button/button";
import {Value, StyledCounter} from "./styled"

export default function Counter ({ className, value, onChange, minValue }) {
    const isDisbaledMinus = value === minValue;
    return (
        <StyledCounter className={className}>
            <Button disabled={isDisbaledMinus} size='small' onClick={() => onChange && onChange(value - 1)}>-</Button>
            <Value>{value}</Value>
            <Button size='small' onClick={() => onChange && onChange(value + 1)}>+</Button>
        </StyledCounter>
    )
}