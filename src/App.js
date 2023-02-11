import { useState } from "react";
import "./styles.css";
const emogiDictionary = {
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face"
};
var emojiweknow = Object.keys(emogiDictionary);
console.log(emojiweknow);
export default function App() {
  const [emojiInput, setEmojiInput] = useState("");
  function emogiInputHandler(event) {
    var userinput = event.target.value;
    var emogi_description = emogiDictionary[userinput];
    if (emogi_description === undefined) {
      emogi_description = "This emogi meaning is not in our database";
    }
    setEmojiInput(emogi_description);
  }
  function emogiClickHandler(emogi) {
    var emogi_description = emogiDictionary[emogi];
    setEmojiInput(emogi_description);
  }
  return (
    <div className="App">
      <h1>Inside outtt</h1>
      <input
        placeholder="put the emoji here to know the meaning"
        onChange={emogiInputHandler}
      ></input>

      <div style={{ padding: "2rem" }}>{emojiInput}</div>

      <div style={{ fontSize: "2rem", cursor: "pointer" }}>
        {emojiweknow.map(function (emogi) {
          return (
            <span onClick={() => emogiClickHandler(emogi)} key={emogi}>
              {emogi}
            </span>
          );
        })}
      </div>
    </div>
  );
}
