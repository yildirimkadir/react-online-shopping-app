import styled from 'styled-components';


export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.01);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  

`;

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  min-width: 290px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info} {
    opacity: 1;
  }
`;

// export const Circle = styled.div`
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: #fff;
//   position: absolute;
//   /* z-index: 5; */

// `;

export const Image = styled.img`
  height: 65%;
  z-index: 2;

`;
export const Icon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 background-color: #fff;
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 10px;
 cursor: pointer;
 transition: all 0.3s ease;
 &:hover {
  background-color: #e9f5f5;
  transform: scale(1.2);

 }

`;