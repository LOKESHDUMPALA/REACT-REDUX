import { useSelector } from "react-redux";
import Todo from "./Todo";
   

   function Todolist(){
          const data = useSelector((state)=>state.todos);
          console.log(data);
    return(
        <ul className="list-group">
            {
                data.map(
                    (todo)=>(
                      <Todo key={todo.id} id={todo.id} title={todo.title} />
                    )
                )
            }
        </ul>
    )

   }
   export default Todolist;