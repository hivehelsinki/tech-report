export default function Button({ children }) {
  return (
    <button className="py-1 px-2 border border-black rounded-sm">
      {children}
    </button>
  );
}
