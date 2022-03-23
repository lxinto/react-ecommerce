import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: rgb(70, 35, 14);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ width: "100%" })}
`

const Announcement = () => {
  return (
    <Container>Super Deal! Free shipping on orders above $50!</Container>
  )
}

export default Announcement