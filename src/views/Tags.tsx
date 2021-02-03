import Layout from 'components/Layout';
import React from 'react';
import {useTags} from 'hooks/useTags';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';
import {Button} from 'components/Button';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const TagList = styled.ol`
font-size: 16px;

>li{
line-height: 20px;
margin-top: 10px;
>a{
padding: 12px 20px;
display: flex;
justify-content: space-between;
align-items: center;
background: white;
border-radius: 20px;
}
}
`
const Header = styled.div`
font-size: 20px;
text-align: center;
padding: 10px 0;
background: #dfdfef;
`
function Tags() {
    // eslint-disable-next-line
   const {tags,onAddTag}= useTags()
    return(
        <Layout>
            <Header> 所有标签</Header>
            <TagList>
                {tags.map(tag=>
                <li key={tag.id}>
                    <Link to={"/tags/"+tag.id}>
                        <span className='oneLine'> {tag.name}</span>
                        <Icon name="right"/>
                    </Link>

                </li>)}

            </TagList>
            <Center>
              <Space/>
                <Space/>
                <Space/>
                <Button onClick={onAddTag}>新增标签</Button>
                <Space/>
            </Center>

        </Layout>
    )
}
export default Tags;