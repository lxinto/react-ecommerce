import { Send } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    background-color: #fcf5f5;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.div`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Newsletter = () => {
  return (
    <Container>
        <Title>News Letter</Title>
        <Desc>Get timely updates for when the products restock!</Desc>
        <InputContainer>
            <Input placeholder="Your Email" />
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter