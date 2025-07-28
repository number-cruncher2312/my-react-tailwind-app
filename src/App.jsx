import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Card1({title, description,color}){

  const [visible,setvisibile] = useState(true)
  
  return (
    <div className={`p-6 rounded-2xl bg-purple-400/60 shadow-xl backdrop-blur-md border border-purple-200`}>
      <h1 className=' text-4xl font-bold ' >{title}</h1>
      
      { visible && (
        <ol className=' mt-4 text-left '>
          {description.map((game,idx) =>{

            return (<li key={idx} className=' animate-fade-in transition-all duration-300 w-fit rounded-2xl pr-3 pl-3 hover:bg-purple-950 hover:text-pink-200' >
              <span>{game}</span>
              <br />
            </li>)
          })}
        </ol>
    )}
      <SHButton visible={visible} setvisibile={setvisibile} />
    </ div>
  )  
}

function SHButton({visible, setvisibile}){

  function togg(){
    if (visible ===true){
      setvisibile(false) 
    }
    else{
      setvisibile(true)
    }
  }

  return (
    <button onClick={togg}
       className='mt-5 inline-block border-2 border-red-400 w-20 rounded-2xl bg-red-400 text-white text-xl font-bold'>
       
      {visible === true ? ('Hide') : ('Show')}

    </button>
  )
}

function Listo(){

  const [Arri,setArri] = useState([])
  const [inputVal, setInputval] = useState('')


  return (
    <>
      <p className='mt-10'>
        Enter things you want to list
      </p>

        <input
          value={inputVal}
          onChange={(e)=>{
            setInputval(e.target.value)
          }}
          className='ml-3 rounded-2xl w-xl pr-3 pl-3 border-2 border-gray-300 text-shadow-gray-900' 
          type="text"
        />
        <button 
          onClick={()=>{
            setArri([...Arri,inputVal])
            setInputval('')
          }}
          className='w-15 bg-amber-800 ml-6 rounded-2xl text-white '>
            Add
        </button>
        <button 
          onClick={()=>{
            setArri([...Arri].slice(0,-1))
          }}
          className='w-20 bg-amber-800 rounded-2xl ml-3 mr-3 text-white '>
            Remove
        </button>

        <button 
          onClick={()=>{
            setArri([])
          }}
          className='w-15 bg-amber-800 rounded-2xl text-white '>
            Reset
        </button>



      {Arri.map((thing) => {

          return (<p>{thing}</p>)

      })}
    </>
  )
}


function Counterbutton(){

  const [num, setNum] = useState(0)

    function plus(){
    setNum(num + 1)
  }

    function minus(){
    setNum(num - 1)
  }

   function reset(){
    setNum(0)
  }

  return(
    <>
        <button 
          onClick={plus}
          className='mt-4 mr-4 border-2 border-purple-600 w-20 rounded-2xl hover:bg-purple-600 hover:text-pink-50 transition duration-300' >
            Increase
        </button>

        <button 
          onClick={minus}
          className='mt-4 mr-4 border-2 border-purple-600 w-20 rounded-2xl hover:bg-purple-600 hover:text-pink-50 transition duration-300' >
            Decrease
        </button>
        <button 
          onClick={reset}
          className='mt-4 mr-4 border-2 border-purple-600 w-20 rounded-2xl hover:bg-purple-600 hover:text-pink-50 transition duration-300'>
            Reset
        </button>
        
        <br />
        
        <div 
           className='mt-5 inline-block border-2 border-red-400 w-10 rounded-2xl bg-red-400 text-white text-xl font-bold'>
           {num}
        </div>
    </>
  )

}

function TextDisplay(){

  const [InputVal, setInputVal] = useState('')

  function textchang(event){
    
    setInputVal(event.target.value)
  }
  
  return(
      <>
      <div className=' flex mt-4'>
        <p>Enter Text Here:</p>
        <input onChange={textchang} placeholder='Enter some text here please' 
          className='ml-3 rounded-2xl w-xl pr-3 pl-3 border-2 border-gray-300 text-shadow-gray-900' 
          type="text"
          value={InputVal}
        />

        <p className='ml-3 '> {InputVal}</p>
      </div>
      </> 
    )


}

function App() {
  return (
    <>
      <Card1 
        title = {"Single Player Games"} 
        description = {["Ghost of Tsushima", "Halo Infinite", "Assassin's Creed: Origins","Expedition 33"]}
      />


      <br />
      <Card1 
        title={"Multiplayer Games"} 
        description={["Battlefront 2", "Guilty Gear:Strive", "Overwatch 2", "Marvel Rivals"]}
      />
      <Counterbutton/> 
      <TextDisplay/>
      <Listo/>

    </>
  )
}

export default App;
