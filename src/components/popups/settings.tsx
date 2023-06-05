import React from "react";

const Settings = () => {
  return (
    <div className='flex flex-col bg-blue-900 p-5 rounded-lg items-center justify-center  space-y-5 cursor-pointer  absolute z-20 top-2 right-2  opacity-90'>
      <label>English to Turkish</label>
      <label>Turkish To English</label>
      <label>Exit</label>
    </div>
  );
};

export default Settings;
