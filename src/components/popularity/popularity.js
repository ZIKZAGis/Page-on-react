export default function Popularity ({count}) {
    let result = null;
    if (count === 0) {
        result = <p>Будь первым, поделись впечатлениями!</p>
    }

    if (count > 5 ) {
        result = <p style={{ color: "green" }}>Проверенный товар</p>
    }
    return result;
}