import styled from 'styled-components';

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
  width: 50%;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  margin: 20px 10px 0px 0;
  padding: 10px;
  min-width: 40%;
`; 

export const Agreement = styled.span`
  font-size: 13px;
  margin: 20px 0;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;