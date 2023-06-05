import React, { useEffect, useState } from "react";
import Button from "./components/button";
import { buttonColor } from "./enums/color";
import list from "./list.json";
import { selectRandomItems } from "./helpers/selectRandomItems";
import { lang } from "./enums/lang";
import { shuffleArray } from "./helpers/shuffleArray";
import ListSection from "./components/listSection";
import { InfoSection } from "./components/infoSection";
import TotalCounter from "./components/totalCounter";

const App = () => {
  const [currentLang, setCurrentLang] = useState(lang.tr);
  const [randomItems, setRandomItems] = useState<any[]>([]);
  const [shuffledItems, setShuffledItems] = useState<any[]>([]);
  const [answerStatus, setAnswerStatus] = useState<boolean>(true);
  const [currentList, setCurrentList] = useState<any[]>(list);
  const [score, setScore] = useState(0);
  const [knownQuestion, setKnownQuestion] = useState(0);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    const shuffledList = shuffleArray(currentList);

    const items = selectRandomItems(shuffledList, 5);
    setRandomItems(items);

    const shuffledItems = shuffleArray(items);
    setShuffledItems(shuffledItems);
  };

  const handleLangChange = () => {
    setCurrentLang((prevLang) => (prevLang === lang.tr ? lang.en : lang.tr));
  };

  const handleButtonClick = (callback: any) => {
    console.log("callback", callback);
    if (callback === randomItems[0]) {
      setAnswerStatus(true);
      setScore((prevScore) => prevScore + 1);
      const newList = currentList.filter((item) => item !== randomItems[0]);
      setCurrentList(newList);
      setKnownQuestion(knownQuestion + 1);
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
    <main className='flex flex-col w-full h-screen items-center justify-center'>
      <TotalCounter knownQuestion={knownQuestion} listLength={list.length} />
      <div className='flex flex-col  p-10 items-center w-2/3 justfiy-center space-y-20 rounded-lg border-2 shadow-2xl border-blue-500 '>
        <InfoSection
          score={score}
          randomItem={randomItems[0]}
          callback={handleLangChange}
          currentLang={currentLang}
        />

        <ListSection
          list={shuffledItems}
          currentLang={currentLang}
          callback={handleButtonClick}
        />

        <Button
          name='Skip'
          callback={handleSkipClick}
          color={buttonColor.purpleToPink}
        />
      </div>
    </main>
  );
};
export default App;
