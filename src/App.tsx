import React from "react";
import Button from "./components/button";
import { buttonColor } from "./enums/color";

const App = () => {
  return (
    <div className='flex w-full '>
      <Button name='Next' color={buttonColor.cyanToBlue} />
      <Button name='Next' color={buttonColor.pinkToOrange} />
      <Button name='Next' color={buttonColor.purpleToBlue} />
      <Button name='Next' color={buttonColor.redToYellow} />
      <Button name='Next' color={buttonColor.purpleToPink} />
    </div>
  );
};

export default App;
