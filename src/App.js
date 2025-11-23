import React from "react";
import Post from "./Post";
import Header from "./Header";
function App() {
  return (
    <>
      <Header title="Matheus">
        <h2>Posts da semana </h2>
      </Header>
      <hr />

      <Post likes={20} title="matheus" subtitle="Subtitulo da noticia" />

      <Post likes="20" title="Sophia" subtitle="Subtitulo da Sophia" />

      <Post likes={30} title="Sophia" subtitle="Subtitulo da Matheus" />

      <Post likes={230} title="matheus" subtitle="Subtitulo da noticia" />
    </>
  );
}

export default App;
