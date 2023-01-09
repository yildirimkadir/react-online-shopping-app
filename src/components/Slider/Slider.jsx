import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Container, Arrow, Slide, ImgContainer, InfoContainer, Img, Wrapper, Title, Button, Desc } from './Slider.style';


const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <KeyboardDoubleArrowLeftIcon />
        </Arrow>
        <Wrapper>
            <Slide>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>FASHION TRENDS TO BUY BEFORE THE SEASON! 30% NEW ARRIVALS.</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                <ImgContainer>
                  <Img src="https://cdn.pixabay.com/photo/2017/09/17/15/42/model-2758787_960_720.jpg"/>
                </ImgContainer>
            </Slide>
            <Slide>
                <ImgContainer>
                  <Img src="https://cdn.pixabay.com/photo/2020/07/13/13/00/dress-5400691_960_720.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>FASHION TRENDS TO BUY BEFORE THE SEASON! 30% NEW ARRIVALS.</Desc>
                    <Button>SHOW</Button>
                </InfoContainer>
            </Slide>
            <Slide>
                <InfoContainer>
                    <Title>SUMMER SALE</Title>
                    <Desc>FASHION TRENDS TO BUY BEFORE THE SEASON! 30% NEW ARRIVALS.</Desc>
                    <Button>SHOW</Button>
                </InfoContainer>
                <ImgContainer>
                  <Img src="https://cdn.pixabay.com/photo/2017/09/17/15/42/model-2758787_960_720.jpg"/>
                </ImgContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <KeyboardDoubleArrowRightIcon />
        </Arrow>

    </Container>
  )
}

export default Slider