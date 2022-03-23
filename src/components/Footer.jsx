import { Facebook, Instagram, Pinterest, Twitter, MailOutline, Phone, Room, } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    ${mobile({ display: "flex", alignItems: "center", justifyContent: "center" })}
`

const Desc = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;

`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>XANDLE</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur eum iusto voluptate at unde cum dolorum obcaecati aspernatur officiis, quod excepturi odit numquam molestias, omnis sunt. Quae, temporibus blanditiis!
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>About us</ListItem>
                <ListItem>My Account</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> Adress, City, Street, Building</ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+1234567891</ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>example@fake.com</ContactItem>
            <Payment src="/images/payment.jpg"/>
        </Right>
    </Container>
  )
}

export default Footer