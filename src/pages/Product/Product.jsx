import Navbar from "../../components/navbar/Navbar"
import { Container, Wrapper, ImgContainer, Image, InfoContainer,Title, Desc, Price} from "./Product.style" 
import Announcements from '../../components/Announcements/Announcements'
import NewsLetter from "../../components/NewsLetter/NewsLetter"
// import Products from "../../components/Products/Products"
import Footer from "../../components/Footer/Footer"


const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <Wrapper>
            <ImgContainer>
              <Image src="" />
            </ImgContainer>
            <InfoContainer>
                <Title>Men: Fashion Watch</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora facere dolor, officiis culpa ex deleniti. Nesciunt quaerat ut odit natus.</Desc>
                <Price>300$</Price>
            </InfoContainer>
        </Wrapper>
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product