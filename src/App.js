import React from "react";
import Post from "./Post";
function App() {
  return (
    <>
      <h1 id="title">Oie Matheus e Sophia</h1>
      <h2>Posts da semana </h2>

      <hr />

      <Post 
      title="matheus"
      subtitle="Subtitulo da noticia"
      />
      
      <Post 
      title="Sophia"
       subtitle="Subtitulo da Sophia"
      />
      
      <Post 
      title="Sophia"
       subtitle="Subtitulo da Matheus"
      />
      
      <Post 
      title="matheus"
       subtitle="Subtitulo da noticia"
      />
    </
    >
  );
}

export default App;
