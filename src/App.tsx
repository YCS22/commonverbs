import React, { useEffect, useState } from "react";
import Button from "./components/button";
import { buttonColor } from "./enums/color";
import list from "./list.json";
import { selectRandomItems } from "./helpers/selectRandomItems";
import { lang } from "./enums/lang";

const App = () => {
  const [currentLang, setCurrentLang] = useState(lang.tr);
  const [randomItems, setRandomItems] = useState<any[]>([]);
  const [shuffledItems, setShuffledItems] = useState<any[]>([]);
  const [answerStatus, setAnswerStatus] = useState<boolean>(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    getItems();
  }, []);

  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const getItems = () => {
    const shuffledList = shuffleArray(list);

    const items = selectRandomItems(shuffledList, 5);
    setRandomItems(items);

    const shuffledItems = shuffleArray(items);
    setShuffledItems(shuffledItems);
  };

  console.log("shuffledItems", shuffledItems);

  const handleLangChange = () => {
    setCurrentLang((prevLang) => (prevLang === lang.tr ? lang.en : lang.tr));
  };

  const handleButtonClick = (callback: any) => {
    if (callback === randomItems[0].tr || callback === randomItems[0].en) {
      setAnswerStatus(true);
      setScore((prevScore) => prevScore + 1);
      getItems();
    } else {
      if (score > 0) {
        setScore((prevScore) => prevScore - 1);
      }
      setAnswerStatus(false);
      shuffledItems.filter(
        (item: any) => callback === item.tr || callback === item.en
      );
    }
  };

  const handleSkipClick = () => {
    getItems();
  };

  if (randomItems.length === 0) {
    return <label>Loading...</label>;
  }

  return (
    <div className='flex flex-col w-full h-screen items-center justify-center space-y-10'>
      <div className='flex items-center justify-between text-center space-x-5 w-1/2'>
        <label
          className='cursor-pointer border rounded-md p-3 max-w-xs'
          onClick={handleLangChange}
        >
          {currentLang === lang.tr
            ? "Türkçeden İngilizceye"
            : "İngilizceden Türkçeye"}
        </label>

        <label className='text-lg font-bold uppercase'>
          {currentLang === lang.tr ? randomItems[0].en : randomItems[0].tr}
        </label>

        <span className='text-md font-bold text-blue-600'>Score : {score}</span>
      </div>

      <div className='flex space-x-10'>
        {shuffledItems.map((item: any) => (
          <Button
            key={item.tr}
            callback={handleButtonClick}
            name={currentLang === lang.tr ? item.tr : item.en}
            color={buttonColor.cyanToBlue}
          />
        ))}
      </div>

      <div className='flex flex-col'>
        <Button
          name='Skip'
          callback={handleSkipClick}
          color={buttonColor.purpleToPink}
        />
      </div>
    </div>
  );
};

export default App;
