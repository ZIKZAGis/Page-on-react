import Button from "../button/button"
export default function Description ({text}) {
    return (
        <>
            {text}
            <Button type="button">Подробнее</Button>
        </>
    )
}