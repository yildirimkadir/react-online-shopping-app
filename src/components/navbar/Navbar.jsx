import React from 'react'
import { Container, 
  Wrapper, 
  Center, 
  Left,
  Right,
  SearchContainer,
  Language,
  Logo,
  Input 
} from './Navbar.style';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <SearchIcon />
            </SearchContainer>
          </Left>
          <Center><Logo>Online Shopping</Logo></Center>
          <Right>right</Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar