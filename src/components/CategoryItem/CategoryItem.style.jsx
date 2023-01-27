import styled from 'styled-components';
import {mobile} from "../../responsive";


export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* ${mobile({height: "30vh"})} */
`;
export const Title = styled.h1`
  color: black;
`;
export const Button = styled.button`
  padding: 10px;
  background-color: #fff;
  color: black;
  cursor: pointer;
    font-weight: 600;

`;
