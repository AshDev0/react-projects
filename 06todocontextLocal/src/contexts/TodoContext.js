import { createContext, useContext } from "react";
export const ToDoContext = createContext({
        todos:[
            {
                id:1,
                todo: 'Todo Msg',
                completed:false,
        }
    ],
    addTodo: () => {},
    updateTodo: ()=> {},
    deleteTodo: ()=>{},
    toggleComplete:()=>{}
    });

export const useTodo = ()=>{
    return useContext(ToDoContext)
}
export const TodoProvider = ToDoContext.Provider