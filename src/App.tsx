import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {MyChatBot,Home} from './components/index';
import {Counter,Hello,Clock,Kitty} from "./oop/index";

class App extends React.Component<any, any>{
    public render() {
        return <Router>
                <Link to="/">홈으로 이동</Link> <br/>
                <Link to="/chat">챗봇 이동</Link> <br/>
                <Link to="/counter">카운터 이동</Link> <br/>
                <Link to="/hi">헬로 이동</Link> <br/>
                <Link to="/clock">클락 이동</Link> <br/>
                <Link to="/kitty">고양이 이동</Link> <br/> <br/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/chat' component={MyChatBot}/>
                <Route exact path='/counter'>
                    <Counter startNumber={0}/>
                </Route>
                <Route exact path='/hi'>
                    <Hello name={"홍길동"}/>
                </Route>
                <Route exact path='/clock' component={Clock}/>
                <Route exact path='/kitty' component={Kitty}/>
            </Router>
    }
}
export default App;
