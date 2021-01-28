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
    return(
        <MyLayout className="xxx">
            {selected.tags.join('.')}
            <hr/>
            {selected.note}
            <hr/>
            {selected.category}
            <TagsSection value = {selected.tags}
                         onChange={async (tags) => setSelected({
                             ...selected,
                             tags: tags
                         })}/>
            <NoteSection value={selected.note}
                         onChange={(note)=>{
                             setSelected({
                                 ...selected,
                                 note:note
                             })
                         }}
            />
            <CategorySelection value={selected.category}
                               onChange={(category)=>{
                                   setSelected({
                                       ...selected,
                                       category: category
                                   })
                               }}

            />
            <NumberPadSection value={selected.amount}
                              onChange={(amount)=>{
                                  setSelected({
                                      ...selected,
                                      amount: amount
                                  })
                              }}
                              onOk={()=>{}}
            />
        </MyLayout>
    )
}
export default Money;