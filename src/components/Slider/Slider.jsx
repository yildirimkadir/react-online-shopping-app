import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Container, Arrow, Slide, ImgContainer, InfoContainer, Img, Wrapper, Title, Button, Desc } from './Slider.style';
import {sliders} from "../../helpers/data"
import { useState } from 'react';

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left") {
            setSliderIndex(sliderIndex > 0 ?  sliderIndex - 1 : 2)
        } else {
            setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0 )
        }
    }


console.log(sliders)
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <KeyboardDoubleArrowLeftIcon />
        </Arrow>
        <Wrapper sliderIndex={sliderIndex}>
            {sliders.map((item) => (
                <div key={item.id}>
                <Slide bg={item.bg}>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                <ImgContainer>
                  <Img src={item.img}/>
                </ImgContainer>
               </Slide>
            </div>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={handleClick}>
            <KeyboardDoubleArrowRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider