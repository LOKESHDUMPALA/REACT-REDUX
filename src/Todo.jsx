import { useState } from "react";
import { editTodo,deleteTodo } from "./actions";
import { useDispatch } from "react-redux";

function Todo({id,title}){
       const [editing,setediting] = useState(false);
       const [newtitle,setnewtitle] = useState(title);
       const dispatch = useDispatch()
       const handletodo = () => {
        if (newtitle && newtitle.trim()) {
            dispatch(editTodo({ id: id, title: newtitle.trim() }));
            setediting(false);
        }
    }
    
       const handledel = ()=>{
        dispatch(deleteTodo(id));
       }
    return(
        <div>
            {
                editing?(
                    <div className="form-group">
                          <input className="form-control" type ="text" value={newtitle} onChange={(e)=>setnewtitle(e.target.value)}/>
                          <button className="btn btn-secondary" onClick={handletodo}> Save</button>
                          </div>
                )
                :
                 (
                    <li className="list-group-item">
                        <p>{title}</p> 
                        <div className="actions">
                            <button className="btn btn-warning" onClick={()=> setediting(true)}>edit</button>
                            <button className="btn btn-danger" onClick={handledel}>del</button>
                        </div>
                    </li>
                )
            }
        </div>
    );
}

export default Todo;