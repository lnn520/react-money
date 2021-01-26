import React from 'react';
import {HashRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import styled  from 'styled-components';
import Nav from './components/Nav';
import Layout from './components/Layout';

const Wrapper = styled.div`
border: 1px solid red;
height: 100vh;
display: flex;
flex-direction: column;

`
const Main = styled.div`
border: 1px solid green ;
flex-grow: 1;
overflow: auto;
`

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>


    </Router>);
}
function NoMatch(){

    return<h2>404</h2>;
}

function Statistics() {
    return(
        <Layout>
            <h2>Statistics</h2>
        </Layout>


    )
}

function Tags() {
    return(
        <Layout>
            <h2>Tags</h2>
        </Layout>
    )
}

function Money() {
    return(
       <Layout>
           <h2>Money</h2>
       </Layout>
    )
}


export default App;
