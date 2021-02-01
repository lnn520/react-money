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
background: white;
>li{
border-bottom: 2px dotted #d5d5d5;
line-height: 20px;
margin-left: 16px;
margin-right: 16px;
>a{
padding: 12px 0;
display: flex;
justify-content: space-between;
align-items: center;
}
}
`
function Tags() {
    // eslint-disable-next-line
   const {tags,onAddTag}= useTags()
    return(
        <Layout>
            <TagList>
                {tags.map(tag=>
                <li key={tag.id}>
                    <Link to={"/tags/"+tag.id}>
                        <span className='oneLine'> {tag.id}{tag.name}</span>
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