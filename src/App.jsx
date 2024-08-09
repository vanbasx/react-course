import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript it's a programming language",
    },
    {
      id: 2,
      title: "Python",
      body: "Python it's a programming language",
    },
    {
      id: 3,
      title: "Java",
      body: "Java it's a programming language",
    },
    {
      id: 4,
      title: "PHP",
      body: "PHP it's a programming language",
    },
    {
      id: 5,
      title: "GO",
      body: "GO it's a programming language",
    },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  // Получаем newPost из дочернего компонента при помощи callback функции
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="mx-auto mt-5 max-w-screen-lg px-4">
      <PostForm create={createPost} />
      <MySelect
        value={selectedSort}
        onChange={sortPost}
        defaultValue="Sorting"
        options={[
          { value: "title", name: "Sort by title" },
          { value: "body", name: "Sort by description" },
        ]}
      />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Posts list" />
      ) : (
        <h1 className="mb-6 text-center text-4xl font-bold">Posts not find</h1>
      )}
    </div>
  );
}
