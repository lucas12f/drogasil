import { useState } from 'react'
import './App.css'
import dipirona from './assets/img/dipirona.jpg'
import aptamil from './assets/img/aptamil.jpg'
import bandagem from './assets/img/bandagem.png'

export default function App() {

  const CLASSES = [
    { nome: "Remedio", emoji: "💊"},
    { nome: "Leite", emoji: "🍼"},
    { nome: "Curativo", emoji: "🩹"},
  ];

  const IMAGEM = [
    { nome: "Remedio", img: dipirona },
    { nome: "Leite", img: aptamil },
    { nome: "Curativo", img: bandagem },
  ];

  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [RS, setRS] = useState(0); //número
  const [classe, setClasse] = useState(CLASSES[0]); //objeto
  const [imagem, setImagem] = useState(IMAGEM[0]); //imagem 

  const Remedio = () => {
    setNome("DIPIRONA");
    setRS(30);
    setClasse(CLASSES[0]);
    setImagem(IMAGEM[0]);
  }

  const Leite = () => {
    setNome("APTAMIL");
    setRS(45);
    setClasse(CLASSES[1]);
    setImagem(IMAGEM[1]);
  }
  const Curativo = () => {
    setNome("BANDAGEM");
    setRS(36);
    setClasse(CLASSES[2]);
    setImagem(IMAGEM[2]);
  }

  
  return (
    <>
      <main>
        <section>
          <h1>DROGASIL</h1>
         
         <div className="status">
          <p>VALOR:</p>
          <span>{RS}</span>
          <p>NOME:</p>
          <span>{nome}</span>
          <p>PRODUTO:</p>
          <img src={imagem.img} alt={imagem.nome} width="150" />
         </div>
          
          <div className="classes">
            <button onClick={Remedio}>💊 Remedio</button>
            <button onClick={Leite}>🍼 Leite</button>
            <button onClick={Curativo}>🩹 Curativo</button>
            </div>


        </section>
      </main>
    </>
  )
}
