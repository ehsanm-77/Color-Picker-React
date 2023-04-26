import { useState } from 'react';

export const CreateColor = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const handleColorChange = (color: string, operation: string) => {
    switch (color) {
      case 'red':
        setRed((prevRed) => {
          let newValue = operation === 'plus' ? prevRed + 1 : prevRed - 1;
          newValue = Math.max(0, Math.min(255, newValue));
          return newValue;
        });
        break;
      case 'blue':
        setBlue((prevBlue) => {
          let newValue = operation === 'plus' ? prevBlue + 1 : prevBlue - 1;
          newValue = Math.max(0, Math.min(255, newValue));
          return newValue;
        });
        break;
      case 'green':
        setGreen((prevGreen) => {
          let newValue = operation === 'plus' ? prevGreen + 1 : prevGreen - 1;
          newValue = Math.max(0, Math.min(255, newValue));
          return newValue;
        });
        break;
      default:
        break;
    }
  };

  const backgroundColor = `rgb(${red},${green},${blue})`;

  const colorOptions = [
    { name: 'RED', color: red, handleClick: handleColorChange },
    { name: 'BLUE', color: blue, handleClick: handleColorChange },
    { name: 'GREEN', color: green, handleClick: handleColorChange },
  ];

  return (
    <div className="flex p-5 items-center justify-center gap-24">
      <div className="flex flex-col gap-5">
        {colorOptions.map(({ name }) => (
          <div key={name} className={`flex flex-col gap-2`}>
            <div
              className={`border-t-2 border-b-2 w-12 text-${name.toLowerCase()}-500`}
            >
              {name}
            </div>
            <button
              className="border border-black w-44 p-2 rounded-md bg-white hover:bg-gray-200"
              onClick={() => handleColorChange(name.toLowerCase(), 'plus')}
            >
              +
            </button>
            <button
              className="border border-black w-44 p-2 rounded-md bg-white hover:bg-gray-200"
              onClick={() => handleColorChange(name.toLowerCase(), 'minus')}
            >
              -
            </button>
          </div>
        ))}
      </div>
      <div
        className="border border-black p-10 rounded-2xl text-white w-44"
        style={{ backgroundColor }}
      >
        RGB({red},{green},{blue})
      </div>
    </div>
  );
};

// import { useState } from 'react';

// export const CreateColor = () => {
//   const [red, setRed] = useState(0);
//   const [blue, setBlue] = useState(0);
//   const [green, setGreen] = useState(0);

//   const handleRedPlus = () => {
//     setRed((prevRed) => prevRed + 1);
//   };

//   const handleRedMinus = () => {
//     setRed((prevRed) => prevRed - 1);
//   };

//   const handleBluePlus = () => {
//     setBlue((prevBlue) => prevBlue + 1);
//   };

//   const handleBlueMinus = () => {
//     setBlue((prevBlue) => prevBlue - 1);
//   };

//   const handleGreenPlus = () => {
//     setGreen((prevGreen) => prevGreen + 1);
//   };

//   const handleGreenMinus = () => {
//     setGreen((prevGreen) => prevGreen - 1);
//   };

//   const backgroundColor = `rgb(${red},${green},${blue})`;

//   return (
//     <div className="flex p-5 items-center justify-center gap-24">
//       <div className="flex flex-col gap-5">
//         <div className="flex flex-col gap-2">
//           <div className="text-red-500 border-t-2 border-b-2 w-8">RED</div>
//           <button
//             className="border border-black w-44 p-2 rounded-md bg-white"
//             onClick={handleRedPlus}
//           >
//             +
//           </button>
//           <button
//             className="border border-black w-44 p-2 rounded-md bg-white"
//             onClick={handleRedMinus}
//           >
//             -
//           </button>
//         </div>
//         <div className="flex flex-col gap-2">
//           <div className="border-t-2 border-b-2 w-10 text-blue-500">BLUE</div>
//           <button
//             className="border border-black w-44 p-2 rounded-md bg-white"
//             onClick={handleBluePlus}
//           >
//             +
//           </button>
//           <button
//             className="border border-black w-44 p-2 rounded-md bg-white"
//             onClick={handleBlueMinus}
//           >
//             -
//           </button>
//         </div>
//         <div className="flex flex-col gap-2">
//           <div className="border-t-2 border-b-2 w-14 text-green-500">GREEN</div>
//           <button
//             className="border border-black w-44 p-2 rounded-md bg-white"
//             onClick={handleGreenPlus}
//           >
//             +
//           </button>
//           <button
//             className="border border-black w-44 p-2 rounded-md bg-white"
//             onClick={handleGreenMinus}
//           >
//             -
//           </button>
//         </div>
//       </div>
//       <div
//         className="border border-black p-10 rounded-2xl text-white"
//         style={{ backgroundColor }}
//       >
//         RGB({red},{green},{blue})
//       </div>
//     </div>
//   );
// };
