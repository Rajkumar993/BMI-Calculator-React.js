import { useState } from 'react';
import './App.css';


function App() {
  const [height,setHeight]=useState('');
  const [weight,setWeight]=useState('');
  const [bmi,setBmi]=useState(null);
  const [bmiStatus,setBmiStatus]=useState('');
  const [message,setMessage]=useState('');

const Calculate=()=>{
  const isValidHeight = /^\d+$/.test(height)
  const isValidWeight = /^\d+$/.test(weight)
  
 if(isValidHeight && isValidWeight){
  const heightInMeters=height/100;
  const bmiValue=weight/(heightInMeters*heightInMeters);
  setBmi(bmiValue.toFixed(2))
  if(bmiValue<18.5){
    setBmiStatus('Under Weight')
  } else if(bmiValue >= 18.05 && bmi<24.09){
    setBmiStatus('Normal Weight')
  }else if(bmiValue >= 25&& bmi<29.09){
    setBmiStatus('Over Weight')
  } else {
    setBmiStatus('Obese')
  } 

  setMessage('')

 } else {
  setBmi(null)
  setBmiStatus('')
  setMessage('Please Enter A Valid Numeric Value For Height And Weight')
 }
}
function Clear(){
  setBmi(null)
  setBmiStatus('')
setHeight('')
setWeight('')
setMessage('')
}

  return (
    <>
     <div className="container">
      <div className="left"></div>
      <div className="right">
        <h1 className='heading'>BMI Calcuator</h1>
       {message && <p className='error'>{message}</p>}
        <div className="input-container">
          <label htmlFor="height">Height (cm):</label>
          <input type="text" id='height' onChange={(e)=>{
           setHeight(e.target.value)
          }} value={height} />
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="text" id='weight'  value={weight}  onChange={(e)=>{
           setWeight(e.target.value)
          }} />
        </div>
      <div className="btn">
      <button onClick={Calculate}> Calculate BMI</button>
        <button onClick={Clear}>Clear</button>
      </div>
      { bmi!=null && <div className="status">
          <p>Your BMI Is : {bmi}</p>
          <p>Status : {bmiStatus}</p>
        </div>}
      </div>
     </div>
    </>
  )
}

export default App
