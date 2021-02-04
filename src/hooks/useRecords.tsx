import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

 type RecordItem ={
   tagIds: number[];
   note:string;
   category:'+'|'-';
   amount: number;
   createdAt:string;
}
type newRecordItem ={
    tagIds: number[];
    note:string;
    category:'+'|'-';
    amount: number;
}

const useRecords = ()=>{
    const [records,setRecords] = useState<RecordItem[]>([])
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[])
    const addRecords = (newRecord:newRecordItem)=>{
        if(newRecord.amount<=0){
            alert('请输入金额')
            return false;
        }
        if(newRecord.tagIds.length===0){
            alert('请选择标签')
            return false;
        }
        const record = {...newRecord,createdAt: (new Date()).toISOString()};
        setRecords([...records,record])
        return true
    };
    useUpdate(()=>{

        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])
    const deleteRecords= (createdAt:string)=>{

        if(records.map(t=>t.createdAt===createdAt)){
          const newRecords =  records.filter(t=>t.createdAt!==createdAt)
            setRecords(newRecords);
        }
    }
    const findRecords = (id:number)=>records.filter(tag=>tag.tagIds[0]===id)[0]
    return {records,addRecords,deleteRecords,findRecords}

}
export {useRecords}