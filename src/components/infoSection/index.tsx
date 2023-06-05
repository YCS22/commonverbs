import { lang } from "../../enums/lang";

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
    <div className='flex items-center justify-between text-center space-x-5 w-1/2'>
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

      <span className='text-md font-bold text-blue-600'>Score : {score}</span>
    </div>
  );
};
