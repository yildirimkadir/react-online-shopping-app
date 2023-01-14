import Navbar from "../../components/navbar/Navbar"
import { Container, FilterContainer, Filter, Title, FilterText, Select, Option } from "./ProductList.style" 
import Announcements from '../../components/Announcements/Announcements'
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import Products from "../../components/Products/Products"
import Footer from "../../components/Footer/Footer"


const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Title>Products List</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
              <Select>
                <Option disabled selected>
                Newest</Option>
                <Option>Price(asc)</Option>
                <Option>Price(desc)</Option>
              </Select>
            </Filter>
            
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList