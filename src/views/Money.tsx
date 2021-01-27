import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import TagsSection from './Money/TagsSection';
import CategorySelection from './Money/CategorySelection';
import NoteSection from './Money/NoteSection';
import NumberPadSection from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`
function Money() {
    return(
        <MyLayout className="xxx">
            <TagsSection/>
            <NoteSection/>
            <CategorySelection/>
            <NumberPadSection/>
        </MyLayout>
    )
}
export default Money;