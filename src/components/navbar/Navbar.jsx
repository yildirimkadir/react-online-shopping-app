import React from 'react'
import { Container, 
  Wrapper, 
  Center, 
  Left,
  Right,
  SearchContainer,
  Language,
  Logo,
  Input,
  MenuItem 
} from './Navbar.style';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <SearchIcon style={{color: "gray", fontSize: 20}}/>
            </SearchContainer>
          </Left>
          <Center><Logo>Online Shopping</Logo></Center>
          <Right>
            <MenuItem>Register
            </MenuItem>
            <MenuItem>Login
            </MenuItem>
            <MenuItem><Badge badgeContent={4} color="primary"><ShoppingCartOutlinedIcon/></Badge></MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar