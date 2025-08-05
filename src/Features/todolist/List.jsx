// import React, { useState } from 'react';
// import { addTodo,updateTodo,deleteTodo,toggleTodo } from './Todoslice';
// import { useDispatch,useSelector } from 'react-redux';

// export default function List({mode}) {
//   const dataArr=useSelector(state=>state.todo.data);
//   const dispatch=useDispatch();
//   const [text,setText]=useState('');
//   const [data,setData]=useState([]);
//   const[editIndex,setEditIndex]=useState(null);

//   function handleForm(evt){
//     evt.preventDefault();
//      if(editIndex===null){
//      if(text!==''){
//       dispatch(addTodo(text));
//     setText('');
//     }}
//     else{
//       const updated_array=[...dataArr];
//      console.log('upadetd_array',updated_array[editIndex].text);
//      dispatch(updateTodo({
//     id: dataArr[editIndex].id,
//     text: text,
//     }));
//      setEditIndex(null)
//     setText('')
//     }
//   }

//   //  console.log('this is arr hai',dataArr)
  
//    const handleUpadte=(item,index)=>{
//    console.log(item.text,'sss') 
//     setText(item.text)
//     setEditIndex(index)
//   }
//   console.log('mode',mode)
//   return (
//     <>
//        <div className='text-white mt-[40px] mb-[40px]'>
//        <form onSubmit={(e)=>{handleForm(e)} }  
//        className={`text-white border-[0px] shadow-lg/70  mt-[0px] mb-[40px] flex flex-wrap justify-around items-center rounded-[8px]  w-[1200px] mx-auto p-[20px]  ${(mode)?'border-[2px] border-gray-600':'border-[2px] border-gray-600'} `} >
//         <div className='flex '>
            
//             <textarea type="text "  className={` ${(mode)?'border-[2px] border-gray-600':'border-[2px] border-gray-600'} no-underline resize-none overflow-hidden border-[2px] ${(mode)?'text-[black] bg-gray-200':'text-[black] bg-gray-200'} border-gray-400 shadow-lg/70 h-[70px] w-[900px] text-[20px] rounded-[5px] pt-[10px] pl-[10px] p-[20px]`} placeholder='please enter text here' value={text} onChange={(e)=>{setText(e.target.value)}}/>
//         </div>
//         <div className='flex ' >
//             <button type='submit' className={` cursor-pointer  border-gray-400 text-[24px] border-[1px] h-[40px] rounded-[8px] 
//              ${(mode)?' border-gray-600 bg-gray-200':'  bg-black text-white '} text-black   flex justify-center items-center w-[120px] p-[10px] active:border-[0px] shadow-lg/70`} >{(editIndex)?"Upadte":'Submit'}</button>
//         </div>
//         </form>
//         <div className={`mt-[20px] flex flex-wrap w-auto  shadow-lg/70  max-w-[1200px] mx-auto rounded-[20px]  ${(mode)?'border-[1px]  border-gray-600':'border-[2px] border-gray-600'}`}>
//         {dataArr?.map((item,index)=>{
//         return(
//              <div key={index} className={` w-[600px]  h-auto flex-wrap border-black  shadow-lg/70 border-[1px] flex p-[10px] rounded-[10px] justify-around  items-center m-[10px]  ${(mode)?' bg-gray-300  border-green-600':' bg-gray-300 border-black border-[2px] '}`}>
//                 <p className='  w-[300px] h-[100px]  border-[2px] border-black 
//                                   pl-[10px] pt-[1px] overflow-auto scrollbar-hide  rounded-[8px]  text-black whitespace-pre-wrap text-start break-words p-2 bg-[#E5E5E5] '>{item.text}</p>
//                 <button  className=' w-[120px] h-[40px] flex-wrap  rounded-[5px] bg-green-500 text-black font-[500] cursor-pointer border-black hover:bg-green-700  active:text-[18px] text-[20px] border-[2px]' onClick={()=>{handleUpadte(item,index)}} >Update</button>
//                 <button  className=' w-[120px] h-[40px] flex-wrap border-[black] rounded-[5px] active:border-[0px] hover:bg-red-700  border-[2px] text-black font-[500] active:text-[18px] cursor-pointer text-[20px] bg-red-500 ' onClick={()=>{dispatch(deleteTodo(item.id))}}>Delete</button>
                
//              </div>
//             )
//         })}
//         </div>
//        </div> 
//     </>
// )
// }

import React, { useState } from 'react';
import { addTodo, updateTodo, deleteTodo } from './Todoslice';
import { useDispatch, useSelector } from 'react-redux';

export default function List({ mode }) {
  const dataArr = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  function handleForm(evt) {
    evt.preventDefault();
    if (editIndex === null) {
      if (text !== '') {
        dispatch(addTodo(text));
        setText('');
      }
    } else {
      dispatch(updateTodo({
        id: dataArr[editIndex].id,
        text: text,
      }));
      setEditIndex(null);
      setText('');
    }
  }

  const handleUpadte = (item, index) => {
    setText(item.text);
    setEditIndex(index);
  };

  return (
    <div className="text-white mt-10 mb-10 px-2 sm:px-0">
      <form
        onSubmit={handleForm}
        className={`shadow-lg/70 flex flex-col sm:flex-row flex-wrap justify-center gap-4 items-center rounded-[8px] w-full max-w-[1200px] mx-auto p-5 ${(mode) ? 'border-2 border-gray-600' : 'border-2 border-gray-600'}`}
      >
        <div className="w-full sm:w-[900px]">
          <textarea
            className={`resize-none w-full border-2 ${(mode) ? 'text-black bg-gray-200' : 'text-black bg-gray-200'} border-gray-400 shadow-lg/70 h-[70px] text-[20px] rounded-[5px] p-4`}
            placeholder="Please enter text here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-[120px]">
          <button
            type="submit"
            className={`w-full text-[20px] border border-gray-400 h-[40px] rounded-[8px] ${(mode) ? 'bg-gray-200 text-black' : 'bg-black text-white'} cursor-pointer shadow-lg/70`}
          >
            {(editIndex !== null) ? "Update" : 'Submit'}
          </button>
        </div>
      </form>

      <div className={`mt-5 flex flex-col sm:flex-row flex-wrap w-full max-w-[1200px] mx-auto rounded-[20px] shadow-lg/70 ${(mode) ? 'border border-gray-600' : 'border-2 border-gray-600'}`}>
        {dataArr?.map((item, index) => (
          <div
            key={index}
            className={`w-full sm:w-[580px] flex flex-col sm:flex-row items-center justify-around gap-3 p-4 m-3 border shadow-lg/70 rounded-[10px] ${(mode) ? 'bg-gray-300 border-green-600' : 'bg-gray-300 border-black border-2'}`}
          >
            <p className="w-full sm:w-[300px] h-[100px] border-2 border-black overflow-auto scrollbar-hide rounded-[8px] text-black whitespace-pre-wrap text-start break-words p-2 bg-[#E5E5E5]">
              {item.text}
            </p>

            <button
              className="w-full sm:w-[120px] h-[40px] rounded-[5px] bg-green-500 text-black font-[500] border-2 border-black hover:bg-green-700 cursor-pointer text-[20px]"
              onClick={() => handleUpadte(item, index)}
            >
              Update
            </button>

            <button
              className="w-full sm:w-[120px] h-[40px] rounded-[5px] bg-red-500 text-black font-[500] border-2 border-black hover:bg-red-700 cursor-pointer text-[20px]"
              onClick={() => dispatch(deleteTodo(item.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

