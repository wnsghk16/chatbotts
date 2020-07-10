import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Home} from './pages';
import {Cat,Clock,Counter,HelloName,MyChatBot} from "./components";
import './App.css'
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router'

class App extends React.Component<any, any>{
    public render() {
        return  <div>
            <Router>
                <Link to="/">홈으로</Link> <br/>
                <Link to="/chat">챗봇</Link><br/>
                <Link to="/counter">카운터</Link><br/>
                <Link to="/hello">헬로우</Link><br/>
                <Link to="/clock">시계</Link><br/>
                <Link to="/cat">고양이</Link><br/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/chat' component={MyChatBot}/>
                <Route exact path='/cat' component={Cat}/>
                <Route exact path='/clock' component={Clock}/>
                <Route exact path='/counter'>
                    <Counter startNumber={0}/>
                </Route>
                <Route exact path='/hello'>
                    <HelloName name={"홍길동"}/>
                </Route>
            </Router>
        </div>

    }
}
export default App;
