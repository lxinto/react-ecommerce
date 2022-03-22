import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background:linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5),
    ) url(https://images.ctfassets.net/v3n26e09qg2r/6GOP4c05cZftdLZcpjyT4/b9abc2641e0f9b502500605255d6a7ba/Better_sleep_-_Meta.png) center;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 30;
    
`

const Form = styled.form``

const Input = styled.input``

const Agreement = styled.span``

const Button = styled.button``

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
                <Agreement>By agreeing to the terms of condition blablabla</Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register