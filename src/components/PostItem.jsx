import MyButton from "./UI/button/MyButton";

export default function PostItem(props) {
  return (
    <article className="flex items-center justify-between p-5 border-[1px] rounded-lg">
      <div className="flex flex-col gap-1">
        <strong>
          {props.post.id}. {props.post.title}
        </strong>
        <p className="text-neutral-800">{props.post.body}</p>
      </div>
      <div>
        <MyButton>Delete</MyButton>
      </div>
    </article>
  );
}
