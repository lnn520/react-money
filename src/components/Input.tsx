import React, {InputHTMLAttributes} from 'react';
import styled from 'styled-components';

const Lable = styled.label`
display: flex;
align-items: center;
>span{
margin-right: 16px;
white-space: nowrap;
}
>input{
display: block;
width: 100%;
height: 72px;
background: none;
border: none;
}
`
type Props ={
    label:string;
} & InputHTMLAttributes<HTMLInputElement>//继承input属性
const Input: React.FC<Props> = (props)=>{
    const {label,...rest} = props;
    return(
        <Lable>
            <span>{props.label}</span>
            <input {...rest}
            />
        </Lable>
    )
};
export {Input};