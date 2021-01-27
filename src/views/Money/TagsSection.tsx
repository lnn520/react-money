import styled from 'styled-components';
import React, {useState} from 'react';

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
const TagsSection: React.FC = (props)=>{
    const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
    const [selectedTags,setSelectedTags]=useState<string[]>([])
    const onAddTag = ()=>{
        const tagName = window.prompt('输入您要添加的标签');
        if(tagName!==null){
            setTags([...tags,tagName])
        }
    }
    const onToggleTag=(tag: string)=>{
        const index = selectedTags.indexOf(tag);
        if(index >=0){
            setSelectedTags(selectedTags.filter(t=>t!==tag))
            //如果tag已被选中，就赋值所有没有被选中的tag，作为新的selectedTags.
        }else {
            setSelectedTags([...selectedTags,tag])
        }
    }
    const getClass =(tag:string)=> selectedTags.indexOf(tag)>=0? 'selected':'';
    return (
        <Wrapper>
            <ol>
                {tags.map(tag=><li key={tag}
                onClick={ ()=>{onToggleTag(tag);}}
                className={getClass(tag)}
                >{tag}</li>)}
            </ol>
            <button onClick={onAddTag}>新增标签</button>
        </Wrapper>
    )
}

export default TagsSection;