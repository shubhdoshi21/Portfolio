import React, { useState, useEffect } from "react";

const Typewriter = ({ lines }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer;
    if (currentLine < lines.length) {
      const text = lines[currentLine];
      let currentIndex = 0;
      let reverseIndex = text.length;

      timer = setInterval(() => {
        if (typing && currentIndex <= text.length) {
          setDisplayText(text.substring(0, currentIndex));
          currentIndex++;
        } else if (!typing && reverseIndex >= 0) {
          setDisplayText(text.substring(0, reverseIndex));
          reverseIndex--;
        } else {
          clearInterval(timer);
          

          setTimeout(() => {
                        setCurrentLine((currentLine + 1) % lines.length); // Loop through lines
            setTyping(true);
          }, 2000); // Pause between lines

          setTimeout(() => {
            setTyping(false);
          }, 1000); // Pause before erasing text
        }
      }, 100); // Typing speed
    }

    return () => clearInterval(timer);
  }, [currentLine, lines, typing]);

  return (
    <div>
      <span className="pl-2">{displayText}</span>
       <span className="cursor-blink">|</span>
    </div>
  );
};

export default Typewriter;
