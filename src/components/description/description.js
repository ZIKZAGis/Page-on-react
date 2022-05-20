import { DescriptionButton } from './styled';

export default function Description ({text}) {
    return (
        <>
            {text}
            <DescriptionButton type="button" onClick={() => console.log("Подробнее")}>Подробнее</DescriptionButton>
        </>
    )
}