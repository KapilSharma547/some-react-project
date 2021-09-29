import React from 'react';
import { Route, Switch } from 'react-router-dom';
//import './App.css';
import { FaReact } from "react-icons/fa";
import { FaKickstarterK } from 'react-icons/fa'
import { MdAdd } from 'react-icons/md'
import { IoIosAddCircle } from 'react-icons/io'
import { BiBookAdd } from 'react-icons/bi'
import { GiOverdrive } from 'react-icons/gi'

import About from './About';
import Contact from './Contact';
import Clock from './Clock';
import Menu from './Menu';
import Netflix from './Netflix';
import ClockUPdate from './ClockUpdate';
import Slote from './SloteMachine';
import Form from './Forms';
import TodoList from './TodoList';
import Webpage from './Webpage'
import Error from './Error';
import { Style } from '@material-ui/icons';

const App = () => {
  /*const Name = () => {
    return <h1> Hello, I am a Name Page</h1>
  }*/
  return (
    <>
      {/* <Menu />
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route path='/contact/name' component={Name} />
        <Route path='/netflix' component={Netflix} />
        <Route path='/clock' component={Clock}/>
        <Route path='/clockupdate' component={ClockUPdate}/>
        <Route Path='/slotemachine'  component={Slote} />
        <Route Path='/todolist'  component={TodoList} />
        <Route Path='/form'  component={Form } />
        <Route path='/webpage' component={Webpage} />
         <Route component={Error} />
      </Switch> */}
      <ClockUPdate />

      {/*<About />    
        <Contact />*/}
    </>
  );
}
export default App;
