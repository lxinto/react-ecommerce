import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.pexels.com/photos/289770/pexels-photo-289770.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 40px 20px;
    width: 40%;
    background-color: white;
    border-radius: 10px;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;    
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    ${mobile({ margin: "10px 10px 0 0" })}
`

const Agreement = styled.span`
    margin: 20px 0;
    font-size: 12px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    background-color:rgb(70, 35, 14);
    color: white;
    cursor: pointer;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an Account</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register