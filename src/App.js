import './App.css';
import Dynamic from './Components/Dynamic';
import drug1 from '../src/drug1.json'
import drug2 from '../src/drug2.json'
import { useEffect, useState } from 'react';


function App() {
  const [drugOneEnable,setOneEnable] = useState(false);
  const [drugTwoEnable,setTwoEnable] = useState(false);
  const sug = ['Drug1', 'Drug2'];
  const [sugText, setSugText] = useState("");
  const [sugArr,setSugArr] = useState([]);

  

  const keyHandler = ((event)=>{
    setSugArr([]);
    let str =event.target.value;
    setSugText(str);

      sug.map((val)=>{
        if(val.toLowerCase().includes(str.toLowerCase())){
         setSugArr(arr=>[...arr,val])
        }
      })
    
  })
 const menuHandler = (event)=>{
  setSugArr([]);
  setSugText("");
  console.log(event.target.innerText);
    if(event.target.innerText=="Drug1"){
    setOneEnable(true)
    setTwoEnable(false)
    }
    else if(event.target.innerText=="Drug2"){
      setOneEnable(false)
      setTwoEnable(true)
    }
    else{
      setOneEnable(false)
      setOneEnable(false)

    }
 }
 
  return (
    <div className="App">
      <div className='container form-group border border-dark rounded'>
        
      <h1>Dynamic Form Render </h1>
      <span>Search Here</span>
      <input type="text" placeholder="Search here" className="form-control rounded w-50" value={sugText} id="search" onChange={keyHandler } />
      
      {
       sugArr.map((val,index)=>{
        return(<div className='menu-item border' key={index} onClick={menuHandler}>
           <label>{val}</label>
        </div>
       
        )
         
       })
      }
      {drugOneEnable ? <div><h1>Drug 1 Form</h1>
      <Dynamic schema={drug1} /></div>:null

      
      
      }
      {
        drugTwoEnable ?
        <div><h1>Drug 2 Form</h1>
        <Dynamic schema={drug2} /></div> : null

      }
      

      
        
      </div>

      
    </div>
  );
}

export default App;