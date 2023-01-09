import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 15px;
  position: relative;
  overflow: hidden;

`;
export const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "15px"}; // ternory with "?" and ":" does not work
  right: ${props => props.direction === "right" && "15px"};
  opacity: 0.7;
  z-index: 5;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=> props.sliderIndex * -100}vw);
`;
export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
export const Img = styled.img`
  height: 80%;
`;
export const Title = styled.h1`
  font-size: 70px;
`;
export const Desc = styled.p`
  margin: 50px 0;
  font-size: 50;
  font-weight: 500;
  letter-spacing: 3px;
`;
export const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`;
