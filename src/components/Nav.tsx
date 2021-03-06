import styled from 'styled-components';
import React from 'react';
import { NavLink} from 'react-router-dom';
// @ts-ignore
import Icon from './Icon.tsx';



const NavWrapper = styled.nav`
background: #dfdfef;
line-height: 24px;
box-shadow: 0 0 3px rgba(0,0,0,0.25);
> ul{
display: flex;
>li{

width: 33.3%;
text-align: center;
> a{
display: flex;
flex-direction: column;
padding: 4px 0;
align-items: center;
.icon{
width: 24px;
height: 24px;
}
&.selected{
color: red;
.icon{
fill:red;
}
}
}




}
}
`
const Nav = ()=>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags"   activeClassName="selected">
                        <Icon name="tag"/>标签页</NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>记账页</NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics"/>统计页</NavLink>
                </li>
            </ul>
            </NavWrapper>
    )
}
export default Nav;