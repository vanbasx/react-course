export default function MyButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-5 py-2 rounded-md text-white bg-neutral-900 hover:bg-neutral-700 transition-colors duration-200"
    >
      {children}
    </button>
  );
}
