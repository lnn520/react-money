import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NotMatch';
import styled from 'styled-components';
import {Tag} from './views/Tag';
import {Statistic} from './views/Statistic';
const AppWrapper = styled.div`
color: #333;

`

function App() {
    return (
        <AppWrapper>
        <Router>
            <Switch>
                <Route path="/tags/:id" exact={true}>
                <Tag/>
               </Route>

                <Route path="/tags" exact={true}>
                    <Tags/>
                </Route>

                <Route path="/money" exact={true}>
                    <Money/>
                </Route>
                <Route path="/statistics/:id" exact={true}>
                    <Statistic/>
                </Route>

                <Route path="/statistics" exact={true}>
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>


    </Router>
        </AppWrapper>);
}


export default App;
