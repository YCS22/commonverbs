import React from "react";

type Props = {
  name?: string;
  type?: string;
  color?: string;
  callback?: any;
};

const Button: React.FC<Props> = ({ name, type, color, callback }) => {
  return (
    <button
      onClick={() => {
        callback(name);
      }}
      type='button'
      className={`${color} text-white uppercase text-md bg-gradient-to-br   hover:bg-gradient-to-bl  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
      style={{ width: 200, height: 50 }}
    >
      {name}
    </button>
  );
};

export default Button;
