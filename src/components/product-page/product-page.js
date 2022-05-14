import Title from "../title";
import Image from "../image";
import ProductPrice from "../price";
import Counter from "../counter"
import Description from "../description";
import ShowComment from "../comments";
import Popularity from "../popularity";

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
                    <p>
                        <Popularity count={product.comments.length}/>
                    </p>
                </div>
            </div>
            <Description>{product.description}</Description>
            <div>
                <ShowComment comments={product.comments}/>
            </div>
        </section>
    )

}