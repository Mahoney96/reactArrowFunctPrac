//React Function with Multiple Components:

// function Button(){
//     const [counter, setCounter] = useState(0);
//     const handleClick = () => setCounter(counter+1);
//     return (
//       <button onClick={handleClick}>
//         {counter}
//       </button>
//       );
//   }
  
//   function Display(){
//     return (
//     <div>....</div>
//     );
//   }
  
//   function Greeting(){
//     return (
//       <div>'Hello There'</div>
//     );
//   }
  
//   ReactDOM.render(
//     [<Button />, <Display />, < Greeting />],
//     document.getElementById('mountNode'),












// function Button() {
// 	const [counter, setCounter] = useState(5);
// 	return <button onClick={() => setCounter(counter*2)}>{counter}</button>;
// }

// ReactDOM.render(
//   <Button />, 
//   document.getElementById('mountNode'),
// );



// function Button(){
//   const [counter, setCounter] = useState(0);
//   return <button onClick={() => setCounter(counter+1)}>{counter}</button>;
// }



// ReactDOM.render(
// <Button />,
//   document.getElementById('mountNode'),
// );



// function Button(){
//   const [counter, setCounter] = useState(0);
//   return <button onClick={() => console.log(Math.random())}>{counter}</button>;
// }



// ReactDOM.render(
// <Button />,
//   document.getElementById('mountNode'),
// );


// function Button(){
//   const [counter, setCounter] = useState(0);
//   return <button onClick={
//       function logRandom() {
//   console.log(Math.random());
// }
    
//     }>{counter}</button>;
// }



// ReactDOM.render(
// <Button />,
//   document.getElementById('mountNode'),
// );





//EXPLAINATION//
//So the two parts to a React component are:
//  A) The Function: which is 'Figured Out'
//  B) The Render: To render that function, and the method that displays it. 




// function functionRef() {
//   console.log(Math.random());
// }


// function FiguredOut(){
//   const [string, setCounter] = useState(0);
//   return <button onClick={functionRef()}>{string}</button>;
// }

// ReactDOM.render(
// <FiguredOut />,
//   document.getElementById('mountNode'),
// );//