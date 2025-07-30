import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState={
    data:[]
};

const todoSlice=createSlice(
    {
        name:'todo',
        initialState,
        reducers:{
                    addTodo:{
                              reducer:(state,action)=>{
                              state.data.push(action.payload)
                            },
                             prepare:(text)=>{
                                return { payload:{ id:nanoid(),text,completed:false} }
                             }
                            } ,
                            
                    deleteTodo:(state,action)=>{
                        state.data= state.data.filter((arrItm)=>arrItm.id!==action.payload)
                        
                    } ,  
                   
                    updateTodo:(state,action)=>{
                        const {id,text}=action.payload;
                        const updatedData=state.data.find((todo)=>(todo.id===id));
                        if(updatedData){
                            updatedData.text=text;
                        }
                    },
                    toggleTodo:(state,action)=>{
                     const todo=state.find(t=>t.id===action.payload);
                     if(todo){
                        todo.completed=!todo.completed;
                     }
                    }

                 }
    }
);

export const {addTodo,deleteTodo,updateTodo,toggleTodo} =todoSlice.actions;
export default todoSlice.reducer;
