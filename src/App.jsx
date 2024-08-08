import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript it's programming language",
    },
    {
      id: 2,
      title: "Python",
      body: "Python it's programming language",
    },
    {
      id: 3,
      title: "Java",
      body: "Java it's programming language",
    },
    {
      id: 4,
      title: "PHP",
      body: "PHP it's programming language",
    },
    {
      id: 5,
      title: "GO",
      body: "GO it's programming language",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4 mt-5">
      <form className="max-w-screen-sm">
        <div className="flex flex-col gap-3 mb-4">
          <MyInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Post title"
          />
          <MyInput
            value={description}
            type="text"
            placeholder="Post description"
          />
        </div>
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts list" />
    </div>
  );
}
