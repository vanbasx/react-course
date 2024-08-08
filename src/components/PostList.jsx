import PostItem from "./PostItem";

export default function PostList({ posts, title }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center">{title}</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post, index) => (
          <PostItem number={index + 1} post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
