
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
        <Balabac size="400" delay={5} repeatDelay={2} repeat={500000000000} />;

      
      </div>

      <div className='footer'>
      </div>
    </>
  )
}