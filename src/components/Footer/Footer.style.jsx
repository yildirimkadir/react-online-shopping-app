import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
`;

export const Left = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Logo = styled.h1 `
  flex: 1;
`;
export const Description = styled.p `
  margin: 20px 0;
`;
export const SocialContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SocialIcon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${props=> (props.color)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

export const Center = styled.div `
  flex: 1;
  padding: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
 
`;
export const List = styled.ul`
 margin: 0;
 padding: 0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;
`;
export const ListItem = styled.li`
 width: 50%;
 margin-bottom: 10px;
`;

export const Right = styled.div `
  flex: 1;
  padding: 20px;
`;
