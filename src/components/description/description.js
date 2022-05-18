import { DescriptionButton } from './styled';

export default function Description ({text}) {
    return (
        <>
            {text}
            <DescriptionButton type="button">Подробнее</DescriptionButton>
        </>
    )
}