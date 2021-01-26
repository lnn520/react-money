import styled from 'styled-components';

const CategorySelection = styled.section`
font-size: 24px;
>ul{
display: flex;
background: #c4c4c4;
>li{
position: relative;
width:50%;
text-align: center;
padding: 16px 0;
&.selected::after{
content: '';
display: block;
height: 3px;
background: #000;
position: absolute;
bottom: 0;
width: 100%;
left: 0;
}
}
}
`
export default CategorySelection;