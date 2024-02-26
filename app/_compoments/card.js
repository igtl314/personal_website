export default function Card({ children }) {
  return (
    <div
      className={
        "bg-white rounded-lg shadow-lg p-5 m-1 h-60 text-black text-center"
      }
    >
      {children}
    </div>
  );
}
