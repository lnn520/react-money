import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import CategorySelection from './Money/CategorySelection';
import NumberPadSection from './Money/NumberPadSection';
import NoteSection from './Money/NoteSection';
import {useRecords} from '../hooks/useRecords';
import {Header} from '../components/Header';
const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
const CategoryWrapper = styled.div`
background: #29daea;
`

const defaultFormDate ={
    tagIds: [] as number[],
        note:'',
    category:'-'  as Category,
    amount:0

}
type Category = '-'|'+';
function Money() {
    const [selected,setSelected] = useState(defaultFormDate)
    const onChange=(obj:Partial<typeof selected>)=>{//把部分值传入
        setSelected({
            ...selected,
            ...obj
        });
    };
    const {addRecords} =useRecords()

    const submit = ()=>{
        if(addRecords(selected)){
            alert('保存了')
            setSelected(defaultFormDate);
        }

    }

    return(
        <MyLayout className="xxx" scrollTop={9999}>
              <Header> 记录自己的一天</Header>
            <TagsSection value = {selected.tagIds}
                         onChange={ (tagIds)=>onChange({tagIds})}/>

            <NoteSection value={selected.note}
                         onChange={(note)=>onChange({note})}/>

            <CategoryWrapper>
                <CategorySelection value={selected.category}
                                   onChange={(category)=>onChange({category})}/>
            </CategoryWrapper>


            <NumberPadSection value={selected.amount}
                              onChange={(amount)=>onChange({amount})}
                              onOk={submit}/>
        </MyLayout>
    )
}
export default Money;