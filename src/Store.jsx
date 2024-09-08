import { createStore } from 'redux';

const intialstate = {
    todos:[],
    nextid:1
}

const todoreducer = (state=intialstate ,action)=>{
        switch(action.type){
            case "ADD_TODO":
                 const newTodo = {id : state.nextid,title: action.payload.title};
                 return {
                    ...state,todos:[...state.todos,newTodo],nextid:state.nextid+1
                 }
            case "EDIT_TODO":
                return{
                    ...state,todos:state.todos.map(
                        (todo)=> todo.id===action.payload.id?{...todo,title:action.payload.title}:todo
                    )
                }
            case "DELETE_TODO":
                return {
                    ...state,todos:state.todos.filter(
                        (todo) => todo.id !== action.payload
                    ),
                }         
            default:
                return state;

        }
}
/* we can create 2 or more reducer functions and combine all the reducer function 
function reducer2(state,action){
    switch(action.type){
    case 1:
        return someting
        default: 
         return something
        }
}
for combining reducer functionns :-
let rootreducers = combineReducers({
        redfxn1:toforeducer,
        redfxn2: reducer2 
        })
        const store = createstore(rootreducers);

*/
const store = createStore(todoreducer);
export default store;