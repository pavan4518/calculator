function Display({ displayValue }) {
  return (
    <div>
      <input className="display" type="text" value={displayValue} readOnly />
    </div>
  );
}

export default Display;
