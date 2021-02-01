import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import CategorySelection from './Money/CategorySelection';
import NumberPadSection from './Money/NumberPadSection';
import NoteSection from './Money/NoteSection';
import {useRecords} from '../hooks/useRecords';
const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
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
    const {records,addRecords} =useRecords()
    console.log(records)
    const submit = ()=>{
        if(addRecords(selected)){
            alert('保存了')
            setSelected(defaultFormDate);
        }

    }

    return(
        <MyLayout className="xxx">
            {JSON.stringify(selected)}

            <TagsSection value = {selected.tagIds}
                         onChange={ (tagIds)=>onChange({tagIds})}/>

            <NoteSection value={selected.note}
                         onChange={(note)=>onChange({note})}/>

            <CategorySelection value={selected.category}
                               onChange={(category)=>onChange({category})}/>

            <NumberPadSection value={selected.amount}
                              onChange={(amount)=>onChange({amount})}
                              onOk={submit}/>
        </MyLayout>
    )
}
export default Money;