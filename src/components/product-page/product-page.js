import { useState } from "react";
import Title from "../title/title";
import Image from "../elements/image";
import ProductPrice from "../price/price";
import Description from "../description/description";
import ShowComment from "../comments/comments";
import Tabs from "../tabs/tabs"
import Popularity from "../popularity/popularity";
import {
    StyledProductPage,
    Header,
    ProductWrapper,
    ProductInfo,
    ProductInfoLine,
    PageCounter,
    BuyButton,
    DeliveryValue
  } from "./styled";
import PopUp from "../popup/popup";
import Order from "../order/order";


export default function ProductPage({ product }) {
    const [productCount, setProductCount] = useState(1);
    const [isShowPopup, setIsShowPopup] = useState(false);

    const tabs = [
        {
          title: "Описание",
          content: <Description text={product.description} />
        },
        {
          title: "Комментарии",
          content: <ShowComment comments={product.comments} />
        }
      ];

    return(
        <StyledProductPage>
            <Header>
                <Title>{product.name}</Title>
            </Header>
            <ProductWrapper>
                <Image
                    width="200"
                    height="257"
                    maxWidth="200"
                    src={product.src}
                    alt={product.name}
                />
                <ProductInfo>
                    <ProductInfoLine>
                        Цена: {" "} <ProductPrice price={product.price * productCount} />
                    </ProductInfoLine>
                    <ProductInfoLine>
                        Колличество: {" "} <PageCounter minValue={1} value={productCount} onChange={setProductCount}/>
                    </ProductInfoLine>
                    <ProductInfoLine>
                        <span>Доставка:</span>
                        <DeliveryValue>
                            {product.delivery}
                        </DeliveryValue>
                    </ProductInfoLine>
                    <BuyButton size="large" onClick={() => setIsShowPopup(true)}>Купить</BuyButton>
                    <p>
                        <Popularity count={product.comments.length}/>
                    </p>
                </ProductInfo>
            </ProductWrapper>
            <Tabs tabs={tabs} />
            <PopUp 
                isShow={isShowPopup}
                onClose={() => setIsShowPopup(false)}
                title="Оформление"
            >
                <Order />
            </PopUp>
        </StyledProductPage>
    )

}