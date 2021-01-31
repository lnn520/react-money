import {useState} from 'react';
import {createId} from './lib/createId';
const defaultTags =[
    {id:createId(),name:'衣'},
    {id:createId(),name:'食'},
    {id:createId(),name:'住'},
    {id:createId(),name:'行'}
]
const useTags= ()=>{
    const [tags,setTags] = useState<{id:number,name:string}[]>(defaultTags)
    const findTag = (id:number)=>tags.filter(tag=>tag.id===id)[0]
    const findTagIndex = (id:number)=>{
        let result = -1;
        for(let i = 0;i<tags.length;i++){
            if(tags[i].id===id){
                result=i;
                break;
            }
        }
         return result;

    }
    // const updateTag = (id:number,obj:{name:string})=>{
    //     const index = findTagIndex(id);
    //     const tagsClone = JSON.parse( JSON.stringify(tags));
    //     tagsClone.splice(index,1,{id:id,name:obj.name})//返回值是被删的对象
    //     setTags(tagsClone)
    // }
    // const deleteTag = (id:number)=>{
    //     const index = findTagIndex(id);
    //     const tagsClone = JSON.parse( JSON.stringify(tags));
    //     tagsClone.splice(index,1)
    //     setTags(tagsClone)
    // }
    //优化
    const updateTag = (id:number,{name}:{name:string})=> {
        setTags(tags.map(tag=>{
            return tag.id === id? {id,name} : tag;
        }))
    }
    const deleteTag = (id:number)=>{
        setTags(tags.filter(tag=>tag.id!==id))//创建新的数组
    }
    return{
        tags,
        setTags,
        findTag,
        updateTag,
        findTagIndex,
        deleteTag
    }
}
export {useTags}
