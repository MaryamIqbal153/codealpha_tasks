// src/components/Button.jsx
function Button({ label, onClick, className = "" }) {
  return (
    <button
      onClick={() => onClick(label)}
      className={`bg-gray-300 hover:bg-gray-400 text-xl font-semibold p-4 rounded-lg shadow ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
