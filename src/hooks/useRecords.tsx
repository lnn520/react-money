import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
// type newRecordItem =Omit<RecordItem,'createdAt'>忽略RecordItem中的createdAt
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
        const record = {...newRecord,createdAt: (new Date()).toISOString()};
        setRecords([...records,record])
    };
    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])

    return {records,addRecords}
}
export {useRecords}