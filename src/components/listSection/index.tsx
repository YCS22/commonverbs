import React from "react";
import { lang } from "../../enums/lang";

type Props = {
  list: Array<any>;
  currentLang: string;
  callback: any;
};

const ListSection: React.FC<Props> = ({ list, currentLang, callback }) => {
  return (
    <div className='flex  rounded-lg p-6 w-full  '>
      <div className='flex flex-col md:flex-row  space-y-5 md:space-y-0   md:space-x-5 w-full justify-center'>
        {list.map((item: any) => (
          <div
            className='flex h-12 md:h-20    bg-gradient-to-br from-blue-600 to-blue-700 focus:ring-cyan-300  hover:bg-gradient-to-bl   font-bold  text-white  rounded-lg  cursor-pointer text-center items-center justify-center  md:w-1/5'
            key={item.tr}
            onClick={() => {
              console.log("ok");
              callback(item);
            }}
          >
            {currentLang === lang.tr ? item.tr : item.en}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListSection;
