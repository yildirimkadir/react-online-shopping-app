import Navbar from "../../components/navbar/Navbar"
import { Container, Wrapper, ImgContainer, Image, InfoContainer,Title, Desc, Price, FilterContainer, Filter, FilterTitle, FilterSize, FilterColor
, FilterSizeOption, AddContainer, AmountContainer, Button, Amount} from "./Product.style" 
import Announcements from '../../components/Announcements/Announcements'
import NewsLetter from "../../components/NewsLetter/NewsLetter"
// import Products from "../../components/Products/Products"
import Footer from "../../components/Footer/Footer"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Wrapper>
            <ImgContainer>
              <Image src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </ImgContainer>
            <InfoContainer>
                <Title>Men: Fashion Shoe</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere dolor, officiis culpa ex deleniti. Nesciunt quaerat ut odit natus.</Desc>
                <Price>$300</Price>
                <FilterContainer>
                  <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="darkblue"/>
                    <FilterColor color="gray"/>
                  </Filter>
                  <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                      <FilterSizeOption>39</FilterSizeOption>
                      <FilterSizeOption>40</FilterSizeOption>
                      <FilterSizeOption>41</FilterSizeOption>
                      <FilterSizeOption>42</FilterSizeOption>
                      <FilterSizeOption>43</FilterSizeOption>
                    </FilterSize>
                  </Filter>
                </FilterContainer>
                <AddContainer>
                  <AmountContainer>
                    <RemoveOutlinedIcon/>
                    <Amount>1</Amount>
                    <AddOutlinedIcon/>
                  </AmountContainer>
                  <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product