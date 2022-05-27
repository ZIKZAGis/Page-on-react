import { useState } from "react";
import Title from "../title/title";
import Slider from "../slider/slider";
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
import Accordion from "../accordion/accordion"

const MAX_TEXT_SIZE = 200;
const COMMENTS_COUNT = 3;

export default function ProductPage({ product, showInfoInAccordion }) {
    const [productCount, setProductCount] = useState(1);
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [isShowAllDescription, setIsShowAllDescription] = useState(false);
    const [commentsShow, setCommentsShow] = useState(COMMENTS_COUNT);

    const tabs = [
        {
            title: "Описание",
            content: (
                <Description
                    text={
                        isShowAllDescription
                            ? product.description
                            : product.description.slice(0, MAX_TEXT_SIZE)
                    }
                    onShowMore={() => setIsShowAllDescription(!isShowAllDescription)}
                    isShowAllDescription={isShowAllDescription}
                />
            )
        },
        {
            title: "Комментарии",
            content: <ShowComment 
                comments={product.comments.slice(0, commentsShow)}
                onShowMore={() => setCommentsShow(commentsShow + COMMENTS_COUNT)}
                allCommentsLength={product.comments.length} />
        }
    ];

    return(
        <StyledProductPage>
            <Header>
                <Title>{product.name}</Title>
            </Header>
            <ProductWrapper>
                <Slider images={product.images}/>
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
            {showInfoInAccordion ? <Accordion items={tabs} /> : <Tabs tabs={tabs} />}
            <PopUp 
                isShow={isShowPopup}
                onClose={() => setIsShowPopup(false)}
                title="Оформление">
                <Order />
            </PopUp>
        </StyledProductPage>
    )

}