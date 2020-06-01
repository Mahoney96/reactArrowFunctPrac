import React from 'react';
import itemsFiltered from './arrayReactPrac';
// import Person from './script';//



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