import { DescriptionButton } from './styled';

export default function Description ({text, onShowMore, isShowAllDescription}) {
    return (
        <>
            {text}
            <DescriptionButton onClick={onShowMore}>
                {isShowAllDescription ? "Cкрыть" : "Подробнее"}
            </DescriptionButton>
        </>
    )
}