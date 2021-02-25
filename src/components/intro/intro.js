import React, { useState } from 'react';
import './intro.css';

let Intro = (props) => {
    let [blinkingclasses, setblinkingclasses] = useState('Blink1')
    // let Blink = () => {
    //   if(blinkingclasses == 'Blink1') {
    //       setInterval(() => {
    //         console.log(blinkingclasses + 'if case');
    //       }, 1000)
    //       // setblinkingclasses('Blink2');
    //     }
    //   else {
    //     setInterval(() => {
    //       console.log(blinkingclasses + 'else case');
    //     }, 2000)
    //     // setblinkingclasses('Blink1');
    //   }
    // }
    return (        
        <div className="Intro">
          <h1 className="IntroTitle">Javascript Developer</h1>
          <a href="#Technologies" className="IntroSubTitle"><span className={blinkingclasses} ></span>Specialized in Front-End</a>
        </div>
    )
}

export default Intro;