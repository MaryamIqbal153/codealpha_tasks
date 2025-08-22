// src/components/ButtonGrid.jsx
import Button from "./Button";

function ButtonGrid({ onButtonClick }) {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
  ];

  return (
    <div className="grid grid-cols-4 gap-3">
      {buttons.map((btn, index) => (
        <Button
          key={index}
          label={btn}
          onClick={onButtonClick}
          className={btn === "=" ? "col-span-4 bg-green-500 text-white hover:bg-blue-600" : 
            btn === "C" ? "bg-red-500 text-white hover:bg-blue-600" : ""
          }
          
        />
      ))}
    </div>
  );
}

export default ButtonGrid;
