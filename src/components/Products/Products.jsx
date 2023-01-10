import { Container } from "./Products.style"
import { popularProducts } from "../../helpers/data"
import Product from "../Product/Product"

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) =>(
        <Product key={item.id} item={item}/>
      ))}
    </Container>
  )
}

export default Products