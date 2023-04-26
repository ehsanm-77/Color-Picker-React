import { useState } from 'react';

export const AddRandomColor = () => {
  const [colors, setColors] = useState([]);

  const handleClick = () => {
    const newColor = getRandomColor();
    setColors([...colors, newColor]);
  };

  const getRandomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    console.log(color.padStart(6, '0'));
    return '#' + color.padStart(6, '0');
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 my-10">
      <div>
        <button
          className="border border-black px-10 py-2 rounded-md bg-white"
          onClick={handleClick}
        >
          add color
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {colors.map((color) => {
          return (
            <>
              <div
                className="border border-black px-10 py-2 rounded-md"
                style={{ background: color }}
              >
                {color}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
