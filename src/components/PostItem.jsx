import MyButton from "./UI/button/MyButton";

export default function PostItem(props) {
  return (
    <article className="flex items-center justify-between rounded-lg border-[1px] p-5">
      <div className="flex flex-col gap-1">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <p className="text-neutral-800">{props.post.body}</p>
      </div>
      <div>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </article>
  );
}
