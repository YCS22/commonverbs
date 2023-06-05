import { lang } from "../../enums/lang";
import Score from "../score";

type Props = {
  currentLang: string;
  callback: any;
  randomItem: {
    en: string;
    tr: string;
  };
  score: number;
};

export const InfoSection: React.FC<Props> = ({
  currentLang,
  callback,
  randomItem,
  score,
}) => {
  return (
    <div className='flex flex-col items-center justify-between text-center font-bold  w-full rounded-lg'>
      <div className='flex justify-between items-center w-full'>
        <label
          className='cursor-pointer rounded-md p-3 max-w-xs bg-purple-400 hover:bg-purple-300'
          onClick={callback}
        >
          {currentLang === lang.tr ? "TR to EN" : "EN to TR"}
        </label>
        <Score value={score} />{" "}
      </div>

      <label className='text-lg font-bold uppercase'>
        {currentLang === lang.tr ? randomItem.en : randomItem.tr}
      </label>
    </div>
  );
};
