import { useState, useEffect } from 'react'
import './css/App.css'

export default function App() {
  const [time, setTime] = useState(10);


  useEffect(() => {

    const myinterval = setInterval(() => {

      if (time == 0)
        {setTime(10)}
      else{setTime(time - 1)}
    }, 1000);

    return () => clearInterval(myinterval);
  }, [time]);
 

  return (
    <>
      <div className='header'>
      </div>

      <div className='middle'>

        {time}
      
      </div>

      <div className='footer'>
      </div>
    </>
  )
}