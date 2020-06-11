import React from 'react';
import itemsFiltered from './arrayReactPrac';
import Button from './TuesReact';
// import Person from './script';//
import 


function App (){
    
    const sayHello = () => {
        console.log('hello');
    }

    return(
    <div>
        <h1>Hello React</h1>
        <button onClick={sayHello}>Hello</button>
    </div>
    );
}

export default App;


// function logRandom(){
//     console.log(Math.random());
//   }
  
//   function Button(){
//     const [counter, setCounter] = useState('click');
//     return <button onClick={logRandom}>{counter}</button>;
//   }
  
//   ReactDOM.render(
//     <Button />,
//     document.getElementById('mountNode'),
//   );


// import React from 'react';
// import Tweet from "./Tweet";

// function App(){
//     return(
//      <div>
//        <Tweet /> 
//      </div>  
//     );
// }

// export default App;