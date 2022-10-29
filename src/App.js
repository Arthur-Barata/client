import React,{useState} from 'react';
import Axios from "axios";
import "./App.css";

function App() {

  const[ISBN,setISBN]=useState("")
  const[title,settitle]=useState("")
  const[author,setauthor]=useState("")
  const[pages,setpages]=useState(0)
  const[copies,setcopies]=useState(0)

  const cadastrar=()=>{
    Axios.post("http://localhost:3001/cadastro",
    {ISBN:ISBN,
      title:title,
      author:author,
      pages:pages,
      copies:copies
    }).then((response)=>{
      console.log(response.data)
    })
  }

  const showBook= ()=>{
    Axios.get("http://localhost:3001/consulta",{params:{ISBN:1234}}).then((response)=>{

      // response.data.map( (data)=>{
      //   if(data.ISBN==123){
      //     console.log(data)
      //   }
      // })
      console.log(response.data)

    })
  }



  return (
    <div className="App-container">
      <div className="input-container">
        <input
          type="number" 
          name="ISBN" 
          placeholder="ISBN" 
          onChange={(event)=>{
            setISBN(event.target.value)
          }}></input>

        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          onChange={(event)=>{
            settitle(event.target.value)
            console.log(event.target.value)
           
          }}></input>

        <input 
          type="text" 
          name="Author" 
          placeholder="Author"
          onChange={(event)=>{
            setauthor(event.target.value)
          }}></input>

        <input 
          type="number" 
          name="pages" 
          placeholder="Number of pages" onChange={(event)=>{
            setpages(event.target.value)
          }}></input>

        <input 
          type="number" 
          name="copies" 
          placeholder="Number of copies" onChange={(event)=>{
            setcopies(event.target.value)
          }}></input>
          <button onClick={cadastrar}> enviar</button>
          <button onClick={showBook}> consultar</button>
      </div>
    </div>
  );
}

export default App;
