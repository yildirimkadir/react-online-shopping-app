import { Container, Image, Info, Icon} from "./Product.style"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = ({item}) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon/>
        </Icon>
        <Icon>
          <SearchIcon/>
        </Icon>
        <Icon>
          <FavoriteBorderIcon/>
        </Icon>
      </Info>

    </Container>
  )
}

export default Product