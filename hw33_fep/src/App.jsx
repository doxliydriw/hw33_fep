import { useState } from 'react'
import smileImg_1 from '/img/smile_1.svg'
import smileImg_2 from '/img/smile_2.svg'
import smileImg_3 from '/img/smile_3.svg'
import smileImg_4 from '/img/smile_4.svg'

import './App.css'
import SmileCard from './components/smile_card'
import Counter from './components/counter'
import Results from './components/results'

function App() {

 const [max, setMax] = useState({ id: "", value: 0 });
  
  function handleCounterClick(id, value) {
    if (value > max.value) {
      setMax({ id, value });
      console.log(id);
      console.log(value);
    }
 }

  return (
    <>
      <div className="container">
        <div className="card">
          <SmileCard id='1' img={smileImg_1}/>
          <Counter id='1st' onClick={handleCounterClick}/>
        </div>
        <div className="card">
          <SmileCard id='2' img={smileImg_2}/>
          <Counter id='2nd' onClick={handleCounterClick}/>
        </div>
        <div className="card">
          <SmileCard id='3' img={smileImg_3}/>
          <Counter id='3rd' onClick={handleCounterClick}/>
        </div>
        <div className="card">
          <SmileCard id='4' img={smileImg_4}/>
          <Counter id='4th' onClick={handleCounterClick}/>
        </div>
        <Results id={max.id} value={max.value} />
      </div>
    </>
  )
}

export default App
