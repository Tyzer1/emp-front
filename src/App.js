import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center"> 
          React JS Tutorial
        </h3>

        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/Department' element={<Department/>}/>
          <Route path='/Employee' element={<Employee/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
