import React from 'react'
import { Container, 
  Wrapper, 
  Center, 
  Left,
  Right,
  SearchContainer,
  Language 
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
              <SearchIcon />

            </SearchContainer>

          </Left>
          <Center>center</Center>
          <Right>right</Right>
        </Wrapper>
      </Container>
    </div>
  )
}

export default Navbar