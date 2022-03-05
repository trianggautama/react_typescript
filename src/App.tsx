import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {Routes,Route,Navigate} from 'react-router-dom'
import UserList from './component/UserList';
import UserDetail from './component/UserDetail';
import About from './component/About';


function App() {
  return (
   <React.Fragment>
    <Navbar/>
    <Routes>
      <Route  path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
      <Route  path={'/contacts/list'} element={<UserList/>}/>
      <Route  path={'/contacts/:id'} element={<UserDetail/>}/>
      <Route  path={'/about'} element={<About/>}/>
    </Routes>
   </React.Fragment>
  );
}

export default App;
