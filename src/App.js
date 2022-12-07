import React, { useState } from "react";
import "./styles.css";

const ArrowsDictionary = {
  "⏮": "Last track Button ",
  "🔁": "Repeat Button",
  "🔂": "Repeat Single Button",
  "▶️": "Play Button ",
  "⏩": "Fast-Forward Button",
  "🔀": "Shuffle Tracks Button",
  "⏪": "Fast Reverse Button",
  "⏭": "Next Track Button"
};
export default function App() {
  let [meaningOfInputEmoji, setMeaningOfInputEmoji] = useState("");
  // let [meaningOfClickedtEmoji, setMeaningOfClickedEmoji] = useState("");
  let emojiArray = Object.keys(ArrowsDictionary);
  function searchInputHandler(event) {
    let userInput = event.target.value;

    meaningOfInputEmoji = ArrowsDictionary[userInput];
    //search userInput in emoji dictionary
    if (meaningOfInputEmoji) {
      setMeaningOfInputEmoji(meaningOfInputEmoji);
    } else {
      setMeaningOfInputEmoji(
        "The emoji is not currently present in dictionary"
      );
    }
  }
  function emojiClickHandler(emojiItem) {
    setMeaningOfInputEmoji(ArrowsDictionary[emojiItem]);
  }
  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1 style={{ color: "white" }}>Interpret Emoticons right Way !</h1>
      <input onChange={searchInputHandler} style={{ fontSize: "1.75rem" }} />
      <div className="output" style={{ color: "yellow", fontSize: "1.2rem" }}>
        {meaningOfInputEmoji}
      </div>

      {emojiArray.map((item) => {
        return (
          <span
            onClick={() => {
              emojiClickHandler(item);
            }}
            key={item}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
