import { useState, useRef } from "react"

export default function App(){
  const[times, setTimes] = useState([]);
  const[nomeTime, setNomeTime] = useState('');

  const inputTxt = useRef();

  function addTime(name){
    if(name !== ''){
      setTimes([...times, name])
      setNomeTime('');
      inputTxt.current.value = '';
    }else{
      alert('DIGITE O NOME DO TIME!!!')
    }
    
  }

  function delTime(ind){
    let newTimes = times.filter((el)=>{
      return el !== times[ind];
    })

    setTimes([...newTimes]);
  }

  return(
    <div>
      <div className="form">
        <input ref={inputTxt} type='text' placeholder='Nome do time' onChange={(input)=>setNomeTime(input.target.value.toUpperCase())}/>
        <button className="btt" onClick={()=>addTime(nomeTime)}>ADD</button>
      </div>
      <h3>{nomeTime}</h3>
      <h1 className="title">CAMPEONATO BRASILEIRO</h1>
      <ul>
        {times.map((el, ind)=>{
          return <li key={ind}>{el}<button className="bttDelete" onClick={()=>delTime(ind)}>X</button></li>
        })}
      </ul>
    </div>
  )
}
