import React from "react";
import Post from "./Post";
import Header from "./Header";

const posts = [
  { id: 1, title: "Primeiro post", subtitle: "Meu primeiro post", likes: 30 },
  { id: 2, title: "Segundo post", subtitle: "Meu segundo post", likes: 20 },
  { id: 3, title: "Terceiro post", subtitle: "Meu terceiro post", likes: 50 },
];

function App() {
  return (
    <>
      <Header title="Matheus">
        <h2>Posts da semana </h2>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          likes={post.likes}
        />
      ))}
    </>
  );
}

export default App;
