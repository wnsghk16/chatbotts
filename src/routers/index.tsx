import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from '../pages'
import {Cat, Clock, MyChatBot} from '../components'
import AdvancedCounter from "../components/fp/AdvancedCounter";

const routerConfig=[
    { path:'/', exact:true, component : () => <Redirect to="/home"/>},
    { path:'/home', exact:true, component : Home},
    { path:'/chat', exact:true, component : MyChatBot},
    { path:'/counter', exact:true, component : AdvancedCounter},
    { path:'/clock', exact:true, component : Clock},
    { path:'/cat', exact:true, component : Cat},
]
export default routerConfig