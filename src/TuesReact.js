import React from 'react';
import mountNode from 'react';
import ReactDOM from 'react';


function Button(){
    const [counter, setCounter] = setState(0);
    const handleClick = () => setCounter(counter+1);
    return(
    <button onClick={handleClick}>
        {counter}
        </button> 
    );
  };
  
  function Display(){
    return(
    <div>.....</div>
    );
  }
  
  ReactDOM.render(
    [<Button />, <Display />],
    document.getElementbyId('mountNode'),
  );

  export default Button;