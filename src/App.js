import Login from './Components/Login.js';
import "./App.css"
import { useSelector,useDispatch } from 'react-redux';
import Home from './Components/Homepage.js';
import Logout from './Components/Logout.js';
import Navbar from './Components/Navbar.js';
import { loginAddToken } from './state/action-creators/index';
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Createnewtask from './Components/Createnewtask.js';
import Delete from './Components/Delete.js';
import Edit from './Components/Edit.js';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginAddToken(localStorage.getItem('token'))) 
  }, [dispatch]);
  
  const token = useSelector(state => state.token)
  return (
    <Router>
      <div className='container'>
        <h1 style={{textAlign:"center"}}>Todo App</h1>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={token!=='invalid'?<Home />:<Login />} />
            <Route exact path="/login" element={token!=='invalid'?<Home />:<Login />}/>
            <Route exact path="/logout" element={token!=='invalid'?<Logout />:<Login />}/>
            <Route exact path="/create-todo-task" element={token!=='invalid'?<Createnewtask />:<Login />}/>
            <Route exact path="/delete/:id" element={token!=='invalid'?<Delete />:<Login />}/>
            <Route exact path="/edit/:id" element={token!=='invalid'?<Edit />:<Login />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;