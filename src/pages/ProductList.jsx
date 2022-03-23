import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div``

const Title = styled.h1`
    margin: 20px;

`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ padding: "5px", margin: "5px 0" })}
`

const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Title>Title</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Scent</FilterText>
                <Select>
                    <Option>Lavander</Option>
                    <Option>Rose</Option>
                    <Option>Cedar Wood</Option>
                    <Option>Smoked Oak</Option>
                    <Option>Pine</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>Small</Option>
                    <Option>Medium</Option>
                    <Option>Large</Option>
                    <Option>Extra Large</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort product
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (High To Low)</Option>
                    <Option>Price (Low To High)</Option>
                </Select>
                </FilterText>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList