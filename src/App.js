import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐕": "Dog",
  "🐈 ": "Cat",
  "🐪": "Camel",
  "🦄": "Unicorn",
  "🐖": "Pig",
  "🦏": "Rhinocerous",
  "🐍": "Snake",
  "🕷️": "Spider",
  "🐧": "Penguin"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiinputHandler(event) {
    //Processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning =
        "We dont have this in Our Database, we will update it very soon.";
    }

    // console.log(meaning);
    setMeaning(meaning); //react part // react call to show output
  }

  function emojiClickHandler(emoji) {
    //Processing
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //react part // react call to show output
  }
  return (
    <div className="App">
      <h1>Animal Emojipedia(Neogcamp)</h1>
      <input onChange={emojiinputHandler} />

      <div>
        {/* Actual output set by react  using useState*/}
        <h2>Above Emoji Meaning:- " {meaning} " </h2>
      </div>
      <div>
        <h3>👇 Emojis we know 👇</h3>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "3rem",
                padding: "0.5rem 0.5rem",
                cursor: "pointer"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
