import react, { useEffect, useRef, useState} from 'react'



export const App = () => {
  //functionality 
let operator=useRef('')
let inputarr=useRef([]);
const prevval=useRef('');
const firstval=useRef('')
let result;
//To empty the input every time you refresh the page
  useEffect(()=>{
  setinput("0")
  },[])

useEffect(()=>{
  prevval.current=inputval
})
let handleclick=async(e)=>{
//here we have to handle a lot of things
//first if someone click on a number then just append it with the previous number on inputval
let inputvalue=e.target.value;
console.log(inputvalue)
if([0,1,2,3,4,5,6,7,8,9].includes(parseFloat(inputvalue))){

  let temp=inputval
  // console.log("WHen I entered a number after . : "+ temp)
  if(temp!=0 && !(['*','/','-','+','%'].includes(temp)) ){
    setinput(temp+inputvalue)
  }else{
    setinput(inputvalue)
  }
}
else if(inputvalue==='.'){
  let temp=parseFloat(inputval)
  if(temp!==0 ){
    setinput(temp+inputvalue)
  }else{
    setinput(inputvalue)
  }
}else if(inputvalue=='DEL'){
  let temp=inputval;
  setinput(temp.slice(0,-1))
}else if(inputvalue=='AC'){
  setinput("0")
  inputarr.current=[]
}else if(['*','/','%','-','+'].includes(inputvalue)){
  // //perform opertaion and set iinputval to them
 firstval.current=inputval
  // console.log("temp: "+ temp + " and: "+ prevval.current)
  setinput(inputvalue)
  operator.current=inputvalue
}else if(inputvalue=='00'){
  let temp=parseFloat(inputval)
  if(temp!==0 ){
    setinput(temp+inputvalue)
  }else{
    setinput(inputvalue)
  }
}else{
//It is for answer finally show the result you have performed
//It is =

switch(operator.current){
  case '*':
    result=parseFloat(firstval.current)*parseFloat(prevval.current)
  break;
  case '/':
    result=parseFloat(firstval.current)/parseFloat(prevval.current)
  break;
  case '%':
    result=parseFloat(firstval.current)%parseFloat(prevval.current)
  break;
  case '-':
    result=parseFloat(firstval.current)-parseFloat(prevval.current)
  break;
  case '+':
    result=parseFloat(firstval.current)+parseFloat(prevval.current)
  break;
  default:
    result="Invalid operation!"
  break;

}
setinput(result)
inputarr.current=[]
}

}
  const [inputval,setinput]=useState("0")
  return (
    <div className='flex justify-center w-full h-[100vh] bg-[#cc6514] items-center'>
<div className='bg-[#252B32] h-[80vh] w-[24vw] rounded-[2vh] shadow-custom-white '>
<input value={inputval}  onChange={(e) => setinput(e.target.value)}  type='text' className=' w-[85%] text-[1.9rem] font-bold bg-[#252B32] text-white outline-none m-auto block h-[15vh] relative top-[1%] p-5 text-right'></input>
<div>
  <section className='w-full  my-3 h-[10.5vh] relative top-4 font-sans flex justify-center gap-4'><button  value={"AC"} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.3rem]  bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>AC</button><button value={"DEL"} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.3rem] bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>DEL</button><button  value={"%"} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>%</button><button  value={'/'} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>/</button></section>
  <section className='w-full  my-3 h-[10.5vh] relative top-4 font-sans flex justify-center gap-4'><button  value={7} onClick={(e)=>{handleclick(e)}}  className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>7</button><button value={8} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>8</button><button value={9} onClick={(e)=>{handleclick(e)}}className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>9</button><button value={'*'} onClick={(e)=>{handleclick(e)}}className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>*</button></section>
  <section className='w-full  my-3 h-[10.5vh] relative top-4 font-sans flex justify-center gap-4'><button  value={4} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>4</button><button  value={5} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>5</button><button  value={6} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>6</button><button  value={'-'} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>-</button></section>
  <section className='w-full  my-3 h-[10.5vh] relative top-4 font-sans flex justify-center gap-4'><button  value={1} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>1</button><button  value={2} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>2</button><button  value={3} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>3</button><button  value={'+'} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>+</button></section>
  <section className='w-full  my-3 h-[10.5vh] relative top-4 font-sans flex justify-center gap-4'><button  value={'00'} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>00</button><button  value={0} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>0</button><button  value={'.'} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#272D35] w-[65px] h-[65px] rounded-[5vh]'>.</button><button  value={'='} onClick={(e)=>{handleclick(e)}} className='shadow-custom-dual text-white text-[1.4rem] font-bold bg-[#CC6514] w-[65px] h-[65px] rounded-[5vh]'>=</button></section>
</div>
</div>
    </div>
    //lets make a calculator first with taildwind an react

  )
}
export default App