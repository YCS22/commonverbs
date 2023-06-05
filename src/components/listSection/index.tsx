import React from "react";
import { lang } from "../../enums/lang";

type Props = {
  list: Array<any>;
  currentLang: string;
  callback: any;
};

const ListSection: React.FC<Props> = ({ list, currentLang, callback }) => {
  return (
    <div>
      {list.map((item: any) => (
        <label
          key={item.tr}
          onClick={() => {
            console.log("ok");
            callback(item);
          }}
        >
          {currentLang === lang.tr ? item.tr : item.en}
        </label>
      ))}
    </div>
  );
};

export default ListSection;
