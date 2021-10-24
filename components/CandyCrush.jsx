import { useEffect, useState } from "react";

const width = 8;

const candyColors = ["blue", "green", "pink", "purple", "red", "yellow"];

const CandyCrush = () => {
  const [currentBoardColors, setCurrentBoardColors] = useState([]);

  const checkForColumnOfFour = () => {
    for (let i = 0; i < 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = currentBoardColors[i];

      if (
        columnOfFour.every(
          (number) => currentBoardColors[number] === decidedColor
        )
      ) {
        columnOfFour.forEach((number) => (currentBoardColors[number] = ""));
      }
    }
  };

  const checkForColumnOfThree = () => {
    for (let i = 0; i < 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = currentBoardColors[i];

      if (
        columnOfThree.every(
          (number) => currentBoardColors[number] === decidedColor
        )
      ) {
        columnOfThree.forEach((number) => (currentBoardColors[number] = ""));
      }
    }
  };

  const checkForRowOfFour = () => {
    for (let i = 0; i < 39; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = currentBoardColors[i];

      const notValid = [
        5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53,
        54, 55, 62, 63, 64,
      ];

      if (notValid.includes(i)) continue;

      if (
        rowOfFour.every((number) => currentBoardColors[number] === decidedColor)
      ) {
        rowOfFour.forEach((number) => (currentBoardColors[number] = ""));
      }
    }
  };

  const checkForRowOfThree = () => {
    for (let i = 0; i < width * width; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = currentBoardColors[i];

      const notValid = [
        6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
      ];

      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every(
          (number) => currentBoardColors[number] === decidedColor
        )
      ) {
        rowOfThree.forEach((number) => (currentBoardColors[number] = ""));
      }
    }
  };

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

  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFour();
      checkForColumnOfThree();
      checkForRowOfFour();
      checkForRowOfThree();
      setCurrentBoardColors([...currentBoardColors]);
    }, 100);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfThree,
    checkForColumnOfFour,
    checkForRowOfThree,
    checkForRowOfFour,
  ]);

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
