 import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';
import Todolist from './Todolist';
function App() {
     const [todotitle,settodotitle] = useState("");
    const dispatch = useDispatch();
    const handletodo =()=>{
       if(todotitle.trim()){
        const newtodo = {
          title:todotitle
        }
        dispatch(addTodo(newtodo));
        settodotitle("");
       }
    }
  return (
        <div className='container mt-5 w-50'>
         <h3 className='text-primary text-center'>Todo using Redux</h3>
         <div className='input-group'>
                <input type="text"  className='form-control' value={todotitle} onChange={(e)=> settodotitle(e.target.value)} />
                <button className='btn btn-primary' onClick={()=>handletodo()}>
                  ADD
                </button>
         </div>
         <Todolist />
        </div>
  );
}

export default App;
