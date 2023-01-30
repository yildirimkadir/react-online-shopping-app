import styled from 'styled-components';
import {mobile} from "../../responsive";


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightsalmon;
  display: flex;
  align-items: center;
  justify-content: center;
`;  

export const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: #fff;
  ${mobile({width: "75%"})}  
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  margin: 10px 0px;
  padding: 10px;
  min-width: 40%;
`; 

export const Link = styled.a`
  margin: 7px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 1px;
`;