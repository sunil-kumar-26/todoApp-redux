import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import * as motion from "motion/react-client"
import List from './Features/todolist/List';



function App() {
  const [count, setCount] = useState(0)
  const [modeOn,setModeOff]=useState(true);
 function handleTheme(click){
 console.log(click)
 if(click==='switchOn'){
setModeOff(false)
 }
 if(click==='switchOff'){
setModeOff(true)
 }

 }
  return (
    <>
    
    <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "none", visualDuration: 0.4, bounce: 0.5 },
            }} >
    
     <div className={` ${(modeOn)?'bg-[#242424]':'bg-[#E5E5E5]'}  w-auto min-h-[100dvh]   h-auto  p-[10px] mx-auto text-center `} >
     <nav className={`shadow-lg/40 h-[40px] sm:h-[60px] flex flex-wrap  ${(modeOn)?'border-[2px] border-gray-600':'border-[0px] border-gray-600'} justify-between items-center select-none`}>
     <div className='flex justify-around  w-[100px] sm:w-[180px] items-center select-none ml-[10px] ' id='div1-inside-nav'>
     <FaCode color={`${(modeOn)?'white':'black'}`} size={'35px'}/>
     <p className={`${modeOn?"text-white":"text-black"} text-[35px]`}>DEVbros</p>
     </div>
     <div id='div2-inside-nav ' className='flex justify-around w-[100px] sm:w-[100px] border-[1px] items-center sm:mr-[10px] sm:p-[2px] rounded-[50px] '>
     <span>
     {(modeOn)?<BsToggleOn  size={'30px'} color={`${(modeOn)? 'white':'red'}`} cursor={"pointer"} onClick={(e,modeOn)=>{handleTheme('switchOn')}} />
     :<BsToggleOff  cursor={"pointer"} size={'30px'} color={`${(modeOn)? 'white':'black'}`}  onClick={(e,modeOn)=>{handleTheme('switchOff')}} />}     </span>
     <span>
     {(modeOn)?<MdDarkMode size={'35px'} color={`${(modeOn)? 'white':'red'}`}/>
     :<MdLightMode size={'35px'} color={`${(modeOn)? 'white':'black'}`}/>}
     </span>
      </div>
     </nav>
        
     <List mode={modeOn}/>
     
    </div>

    </motion.div>
    </>
  )
}

export default App
