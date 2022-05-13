import Title from "../title";
import Image from "../image";
import ProductPrice from "../price";
import Counter from "../counter"
import Description from "../description";

export default function ProductPage({ product }) {
    return(
        <section>
            <Title>{product.name}</Title>
            <div style={{display: "flex"}}>
                <Image src={product.src} alt={product.name} />
                <div>
                    <p>Цена: <ProductPrice price={product.price} /></p>
                    <div>Колличество: <Counter /></div>
                    <p>
                        <div>Доставка: {product.delivery}</div>
                    </p>
                    <button type="button">Купить</button>
                </div>
            </div>
            <Description>{product.description}</Description>
        </section>
    )

}