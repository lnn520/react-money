import Layout from '../components/Layout';
import React, {useState} from 'react';
import CategorySelection from './Money/CategorySelection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import dayjs from 'dayjs';


const CategoryWrapper = styled.div`
background:#dfdfef;

`;
const Item = styled.div`
display: flex;
justify-content: space-between;
background: #fff;
border-radius: 20px;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
margin-top: 5px;
>.note{
margin-right: auto;
margin-left: 16px;
color: #999;
}
`
const Header =styled.h3`
font-size: 18px;
line-height: 20px; 
padding: 10px 16px;
`
type RecordItem ={
    tagIds: number[];
    note:string;
    category:'+'|'-';
    amount: number;
    createdAt:string;
}
function Statistics() {
    const [category,setCategory] = useState<'-'|'+'>('-')
    const {records} = useRecords();
    const {getName} = useTags();
    const selectedRecords = records.filter(r=>r.category===category)//选中的category
    const hash:{ [K:string]:RecordItem[] } ={}
    selectedRecords.forEach(r=>{
        const key =dayjs(r.createdAt).format('YYYY-MM-DD');
        if(!(key in hash)){
            hash[key] = [];
        }
        hash[key].push(r)
    });

    const array = Object.entries(hash).sort((a,b)=>{

        if(a[0]===b[0]) return 0;
        if(a[0]>b[0]) return -1;
        if(a[0]<b[0]) return 1;
        return 0;
    })
    return(
        <Layout>
            <CategoryWrapper>
                <CategorySelection value={category}
                                   onChange={value => setCategory(value)}/>

            </CategoryWrapper>
            {array.map(([date,records])=><div key={date}>
                <Header>{date}</Header>
                <div>
                    {records.map(r=>{
                        return <Item key={r.createdAt}>
                            <div className="tags">
                                {r.tagIds.map(t=><span key={r.tagIds[0]} > {getName(t)}</span>)}
                            </div>

                            { r.note&&<div className="note">
                                {r.note}
                            </div>}
                            <div className="amount">
                                ￥{r.amount}
                            </div>

                            {/*{dayjs(r.createdAt).format('YYYY年MM月DD日')}*/}

                        </Item>
                    })}
                </div>
            </div>)}

        </Layout>


    )
}
export  default Statistics;