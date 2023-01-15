import Navbar from "../../components/navbar/Navbar"
import { Container} from "./Product.style" 
import Announcements from '../../components/Announcements/Announcements'
import NewsLetter from "../../components/NewsLetter/NewsLetter"
// import Products from "../../components/Products/Products"
import Footer from "../../components/Footer/Footer"


const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcements />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default Product