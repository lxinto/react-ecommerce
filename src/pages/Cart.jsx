import styled from "styled-components"

import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
    padding: 20px;
`
const Wrapper = styled.h1`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.div`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "rgb(70, 35, 14)" : "trasnparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    font-weight: 300;
    font-size: 20px;
    ${mobile({ display: "none" })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display:  flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 25px;
    ${mobile({ fontSize: "15px" })}
`

const ProductName = styled.span`
    font-weight: 200;
`

const ProductId = styled.span`
    font-weight: 200;
`

const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props =>props.color};
    border: solid 0.5px gray;
`

const ProductSize = styled.span`
    font-weight: 200;
`

const PriceDetail = styled.div`
    flex:1;
    font-weight: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
    flex: 1;
    font-weight: 200;
    border:0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 400;
    font-size: 30px;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: rgb(70, 35, 14);
    color: white;
    font-weight: 600;
`
const linkStyle = {    
    textDecoration: "none",
    color: 'black'
  };

const Cart = () => {
  return (
    <Container>
        
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <Link to={"/"} style={linkStyle} >
                <TopButton>Continue Shopping</TopButton>
                </Link>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://5.imimg.com/data5/SELLER/Default/2020/11/PN/GH/ET/77993043/oud-plus-wood-candles-500x500.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> Floral Candle</ProductName>
                                <ProductId><b>ID:</b> 214126</ProductId>
                                <ProductColor color="white"/>
                                <ProductSize><b>Size:</b> M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.vs-static.com/ECMCZpfDt-I5PMVuwupXxj12PTk=/0x0:1080x1080/750x0/Boy_Smells_Cashmere_Kush_scented_candle_c54d218c60/Boy_Smells_Cashmere_Kush_scented_candle_c54d218c60.jpg"/>
                            <Details>
                                <ProductName><b>Product:</b> Cedar Wood</ProductName>
                                <ProductId><b>ID:</b> 521636</ProductId>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size:</b> L</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>1</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>$20</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$50</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping</SummaryItemText>
                        <SummaryItemPrice>$10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$60</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Checkout Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart