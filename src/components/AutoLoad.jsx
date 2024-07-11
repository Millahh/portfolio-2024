/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { DiceIntro } from "./canvas";
import Intro from "./Intro";

const AutoLoad = () => {
  const [isFinish, setFinish] = useState(false);

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setFinish(true);
    }, 7000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once


    if(!isFinish) {
        return <DiceIntro/>;
    } else {
        return <Intro/>
    }

};
  
export default AutoLoad;