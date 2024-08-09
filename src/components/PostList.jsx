import PostItem from "./PostItem";

export default function PostList({ posts, title, remove }) {
  return (
    <div>
      <h1 className="mb-6 text-center text-4xl font-bold">{title}</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <PostItem
            remove={remove}
            number={index + 1}
            post={post}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
}
