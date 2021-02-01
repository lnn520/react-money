import styled from 'styled-components';
import React from 'react';
import {useTags} from 'hooks/useTags';


const Wrapper = styled.section`
padding: 12px 16px;
flex-grow: 1;
background: #ffffff;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
>ol{
margin: 0 -12px;
>li{
  background: #d9d9d9;
  border-radius: 18px;
  display: inline-block;
  padding: 4px 18px;
  font-size: 14px;
  margin: 8px 12px;
  &.selected{
  background: #f60;
  }
  }
}
>button{
background: none;
border: none;
border-bottom: 1px solid  #333;
padding: 2px 4px ;
color: #666;
margin-top: 8px;
}
`;
type Props = {
    value: number[];
    onChange: (selected:number[])=>void;
}
const TagsSection: React.FC<Props> = (props)=>{
    const {tags,onAddTag} = useTags()
    const selectedTagIds = props.value;

    const onToggleTag=(tagId:number)=>{
        const index = selectedTagIds.indexOf(tagId);
        if(index >=0){
            props.onChange(selectedTagIds.filter(t=>t!==tagId))
            //如果tag已被选中，就赋值所有没有被选中的tag，作为新的selectedTags.
        }else {
            props.onChange([...selectedTagIds,tagId])
        }
    }
    const getClass =(tagId:number)=> selectedTagIds.indexOf(tagId)>=0? 'selected':'';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag=><li key={tag.id}
                onClick={ ()=>{onToggleTag(tag.id);}}
                className={getClass(tag.id)}
                >{tag.name}</li>)}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}

export default TagsSection;