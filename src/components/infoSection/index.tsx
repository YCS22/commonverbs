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
    <div className='flex items-center justify-around text-center  w-full'>
      <label
        className='cursor-pointer border rounded-md p-3 max-w-xs'
        onClick={callback}
      >
        {currentLang === lang.tr
          ? "Türkçeden İngilizceye"
          : "İngilizceden Türkçeye"}
      </label>

      <label className='text-lg font-bold uppercase'>
        {currentLang === lang.tr ? randomItem.en : randomItem.tr}
      </label>

      <Score value={score} />
    </div>
  );
};
