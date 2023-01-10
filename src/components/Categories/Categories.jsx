import { Container } from "./Categories.style"
import { categories } from "../../helpers/data"
import CategoryItem from "../CategoryItem/CategoryItem"


const Categories = () => {
  return (
    <Container>
        {categories.map((item)=> (
            <CategoryItem key={item.id} item={item} />
        ))}
    </Container>
  )
}

export default Categories