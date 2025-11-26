import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Primeiro post", subtitle: "Meu primeiro post", likes: 30, read: false },
    { id: 2, title: "Segundo post", subtitle: "Meu segundo post", likes: 20, read: true },
    { id: 3, title: "Terceiro post", subtitle: "Meu terceiro post", likes: 50, read: true },
  ]);
  console.log(posts);

  function handleRefresh() {
    // posts.push();
    // console.log("Posts atualizados:", posts);
    setPosts((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        title: `Post novo ${prevState.length + 1}`,
        subtitle: `Meu post novo ${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 100),
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <>
      <Header title="Matheus">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          title={post.title}
          id={post.id}
          read={post.read}
          subtitle={post.subtitle}
          likes={post.likes}
        />
      ))}
    </>
  );
}

export default App;
