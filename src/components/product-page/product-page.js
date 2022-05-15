import Title from "../title";
import Image from "../image";
import ProductPrice from "../price";
import Counter from "../counter"
import Description from "../description";
import ShowComment from "../comments";
import Popularity from "../popularity";
import Test from "../test-component";

export default function ProductPage({ product }) {
    return(
        <section>
            <Title>{product.name}</Title>
            <Test width="400" isRed/>
            <Test height="100" width="450" color="orange"/>
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