function Buttonc({ onButtonClick }) {
  const buttonContainer = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    ".",
    "0",
    "=",
  ];

  return (
    <div>
      <div className="button-container">
        {buttonContainer.map((item) => (
          <button
            key={item}
            className="button"
            onClick={() => onButtonClick(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Buttonc;
