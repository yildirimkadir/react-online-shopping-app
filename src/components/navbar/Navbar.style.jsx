import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
 `;

export const Center = styled.div`
  flex: 1;
 `;

export const Right = styled.div`
  flex: 1;
 `;

export const Language = styled.span`
  font-size: 15px;
  cursor: pointer;
`;

export const Input = styled.input`
  border: none;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`;
