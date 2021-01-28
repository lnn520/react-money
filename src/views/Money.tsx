import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import CategorySelection from './Money/CategorySelection';
import NumberPadSection from './Money/NumberPadSection';
import NoteSection from './Money/NoteSection';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
type Category = '-'|'+';
function Money() {
    const [selected,setSelected] = useState({
        tags:[] as string[],
        note:'',
        category:'-'  as Category,
        amount:0
    })
    type Selected = typeof selected;
    const onChange=(obj:Partial<Selected>)=>{//把部分值传入
        setSelected({
            ...selected,
            ...obj
        })
    }
    return(
        <MyLayout className="xxx">
            {selected.tags.join('.')}
            <hr/>
            {selected.note}
            <hr/>
            {selected.category}
            <hr/>
            {selected.amount}
            <TagsSection value = {selected.tags}
                         onChange={ (tags)=>onChange({tags})}/>

            <NoteSection value={selected.note}
                         onChange={(note)=>onChange({note})}/>

            <CategorySelection value={selected.category}
                               onChange={(category)=>onChange({category})}/>

            <NumberPadSection value={selected.amount}
                              onChange={(amount)=>onChange({amount})}
                              onOk={()=>{}}/>
        </MyLayout>
    )
}
export default Money;