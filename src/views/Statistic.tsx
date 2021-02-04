import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useRecords} from '../hooks/useRecords';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
import {Button} from '../components/Button';
import styled from 'styled-components';


type Params = {
    id:string;
}
const Topbar = styled.header `
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  padding: 14px;
  background: #dfdfef;
  align-items: center;
 
`
const InputWrapper = styled.div`
background: white;
font-size: 36px;
border-radius: 20px;
margin-top: 8px;
padding: 0 20px;
`

const Statistic:React.FC = ()=> {
    const {findRecords, deleteRecords} = useRecords()
    let {id} = useParams<Params>()//把id命名为idString
    const tag = findRecords(parseInt(id))
    const history = useHistory()
    const onclickBack = () => {
        history.goBack()
    }

    if (tag) {
        return (
            <Layout>
                <Topbar>
                    <Icon name='left' onClick={onclickBack}/>
                    <span>编辑标签</span>
                    <Icon/>
                </Topbar>
                <InputWrapper>
                    确定要删除点击记账记录？
                </InputWrapper>

                <Center>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Button onClick={() => {
                        deleteRecords(tag.createdAt)
                    }}>删除标签</Button>
                </Center>

            </Layout>

        )
    } else {
        return (
            <Layout>
                <Center>
                    标签已删除，点击下方导航栏返回
                </Center>

            </Layout>

        )
    }
}

export {Statistic}