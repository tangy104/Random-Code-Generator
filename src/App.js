import './App.css';
import React, {useState} from 'react';

function App() {
  const [data,setData] = useState({
    content: 'content will appear here',
    author: 'author will appear here',
    tags: ["nice"]
  });


  

  function getQuote(){
    try{
      fetch('https://api.quotable.io/random').then(
      response => response.json()).then(
        (quote)=>{
          setData(quote);
      
      }
      )
    }
    catch(e){
      console.log(e);
    }
      
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <h2 className='Title'>RANDOM QUOTE GENERATOR</h2>
        <h3 className='Quote'>QUOTE: {data.content}</h3>
        <h5 className='Author'>AUTHOR: {data.author}</h5>
        <h5 className='Tag'>Tag: {data.tags[0]}</h5>
        <button className='Generator' onClick={getQuote}>Get Quote</button>
      </header>
    </div>
  );
}

export default App;
