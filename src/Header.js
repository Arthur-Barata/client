import React from "react";
import "./Header.css";

function Header(){
    const showConsult= ()=>{
       
        let research= document.getElementsByClassName("research")[0]
        let inputContainer= document.getElementsByClassName("input-container")[0]    
        inputContainer.style.display="none"
        research.style.display="flex"
        
       

    }
    const showCad=()=>{
         let research= document.getElementsByClassName("research")[0]
        let inputContainer= document.getElementsByClassName("input-container")[0]
        let book= document.getElementsByClassName("book")[0]
        book.style.display="none"
        inputContainer.style.display="flex"
        research.style.display="none"
    }
    

  return(
        <div className="Header">
            <div className="imgh1">
                <img alt="imagem de livros" src="./assets/books.png"></img>
                <h2>Library Management</h2>
            </div>
                <ul>
                    <li onClick={()=>{
                        let  h4research= document.getElementsByClassName("h4research")[0] 
                        let  h4researchn= document.getElementsByClassName("h4research")[1] 
                        h4research.style.display="none" 
                        h4researchn.style.display="none" 
                        showConsult()}}>
                        Consultar
                    </li>
                    <li onClick={showCad}>Cadastrar</li>

                    <li onClick={()=>{
                        let  h4research= document.getElementsByClassName("h4research")[0] 
                        let  h4researchn= document.getElementsByClassName("h4research")[1] 
                        h4research.style.display="block" 
                        h4researchn.style.display="none" 
                        showConsult()}}>
                        Alterar
                    </li>

                    <li onClick={()=>{
                        let  h4research= document.getElementsByClassName("h4research")[1]
                        let  h4researchn= document.getElementsByClassName("h4research")[0]  
                        h4research.style.display="block" 
                        h4researchn.style.display="none"
                        showConsult()}}>
                        Excluir
                    </li>
                </ul>
        </div>
    )
}

export default Header;