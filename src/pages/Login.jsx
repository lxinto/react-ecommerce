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
  width: 25%;
  padding: 20px;
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
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`

const Button = styled.button`
  width: 40%;
  border: none;
  background-color:rgb(70, 35, 14);
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  margin-bottom:10px;
  display: flex;
  align-items: center;
  justify-content: center;    
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Log in</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>Log In</Button>
                <Link>Forgot Password?</Link>
                <Link>Create an Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login