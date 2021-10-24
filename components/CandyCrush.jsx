import { useEffect, useState } from "react";

const width = 8;

const candyColors = ["blue", "green", "pink", "purple", "red", "yellow"];

const CandyCrush = () => {
  const [currentBoardColors, setCurrentBoardColors] = useState([]);
  const createboard = () => {
    let currentBoardColors = [];
    for (let i = 0; i < width * width; i++) {
      const randomNumber =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      currentBoardColors.push(randomNumber);
    }
    setCurrentBoardColors(currentBoardColors);
  };

  useEffect(() => {
    createboard();
    console.log(currentBoardColors);
  }, []);

  return (
    <div className="flex p-4">
      <div className={`grid grid-cols-${width} gap-1 game h-full m-auto pt-16`}>
        {currentBoardColors.map((candyColor, index) => (
          <div key={index} className="h-20 w-20">
            <img
              src=""
              alt={candyColor}
              className={`w-full h-full bg-${candyColor}-700`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandyCrush;
