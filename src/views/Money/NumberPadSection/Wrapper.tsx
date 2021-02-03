import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  >.output{
  background: white;
  line-height: 72px;
  font-size: 72px;
  text-align: right;
  box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
              inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  >.pad{
  >button{
  font-size: 18px;
  float: left;
  width: 25%;
  height: 64px;
 
  &.ok{float: right;height: 128px; }
  &.zero{width: 50%;}
  background:#29daea;
  border: 5px solid white;
  
  }
  }
`
export default Wrapper;