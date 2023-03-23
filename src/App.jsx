import styles from "./app.module.scss";
import React, { useState } from 'react';

const App = () => {

  // Slider
  const [value, setValue] = useState(10);

  // Header Passowrd
  const [password, setPassword] = useState('');
  const[textCopied, setTextCopied] = useState(false);

  // Password Settings
  const [checkUpper, setCheckUpper] = useState(false);
  const [checkLower, setCheckLower] = useState(false);
  const [checkNumbers, setCheckNumbers] = useState(false);
  const [checkSymbols, setCheckSymbols] = useState(false);

  const activePasswordSettingAmount = [checkUpper,checkLower,checkNumbers,checkSymbols].filter((item) => item).length;


  function generatePassword(length, options) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let chars = "";
  let password = "";

  if (options.checkUpper) {
    chars += upperChars;
  }

  if (options.checkLower) {
    chars += lowerChars;
  }

  if (options.checkNumbers) {
    chars += numberChars;
  }

  if (options.checkSymbols) {
    chars += symbolChars;
  }

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }


  return password;
}

function handleClick() {
  const options = {
    checkUpper: checkUpper,
    checkLower: checkLower,

    checkNumbers: checkNumbers,
    checkSymbols: checkSymbols,
  };

  setPassword(generatePassword(value, options));
}

// Too Weak
const isTooWeak = (password.length < 10 && activePasswordSettingAmount < 2) || (password.length >= 10 && activePasswordSettingAmount < 1);
const isWeak = password.length < 10 && activePasswordSettingAmount === 2 || (password.length > 10 && activePasswordSettingAmount === 1 );
const medium = password.length < 10 && activePasswordSettingAmount > 2 || (password.length > 10 && activePasswordSettingAmount > 1 && activePasswordSettingAmount <4);
const strong = password.length > 10 && activePasswordSettingAmount === 4;

const rectangleClassName = isTooWeak ? styles.tooWeak : isWeak ? styles.weak : medium ? styles.medium : styles.strong;


const strengthName = isTooWeak ? "TOO WEAK!" : isWeak ? "Weak" : medium ? "MEDIUM" : "STRONG";

  return (
    <div className={styles["mainBody"]}>

      <h1 className={styles["generator"]}>Password Generator</h1>

      <div className={styles["generator-head"]}>
        <span className={styles["password-generated"]}>{password}</span>
        <div>
        {textCopied ? <h2 className={styles["copiedSpan"]}>COPIED</h2> : ""}
        <img src="./assets/images/icon-copy.svg" alt="copyIcon" onClick={() => {
          navigator.clipboard.writeText(password);
          setTextCopied(!textCopied);
          setTimeout(() => {
            setTextCopied(false);
          }, 1300);
        }} />
        </div>
      </div>

      <div className={styles["generator-main"]}>

        <div className={styles["character-length"]}>

          <div className={styles["character-length-wrap"]}>
            <h3>Character Length</h3>
            <span className={styles["length-number"]}>{value}</span>
          </div>

          <div className={styles["input-slider-wrap"]}>
            <input className={styles["inputSlider"]}
              type="range"
              min="1"
              max="20"
              value={value}
              step="1"
              onChange={(event) => setValue(event.target.value)}
            >
            </input>
            <div className={styles["sliderPercent"]} style={{ width: `${value * 5}%` }}></div>
          </div>

        </div>

        <section className={styles["password-settings"]}>

          <div className={styles.setting} id={styles.upperCase}>
            <div className={`${styles.checkbox} ${checkUpper ? styles.active : ""}`} onClick={() => setCheckUpper(!checkUpper)}>
              {checkUpper ?<img src="./assets/images/icon-check.svg" alt="checkimg" /> : null} 
            </div>
            <span>Include Uppercase Letters</span>
          </div>

          <div className={styles.setting} id={styles.lowerCase}>
            <div className={`${styles.checkbox} ${checkLower ? styles.active : ""}`} onClick={() => setCheckLower(!checkLower)} >
            {checkLower ?<img src="./assets/images/icon-check.svg" alt="checkimg" /> : null} 
            </div>
            <span>Include Lowercase Letters</span>
          </div>

          <div className={styles.setting} id={styles["includeNumbers"]}>
            <div className={`${styles.checkbox} ${checkNumbers ? styles.active : ""}`} onClick={() => setCheckNumbers(!checkNumbers)} >
            {checkNumbers ? <img src="./assets/images/icon-check.svg" alt="checkimg" /> : null} 
            </div>
            <span>Include Numbers</span>
          </div>

          <div className={styles.setting} id={styles["includeSymbols"]}>
            <div className={`${styles.checkbox} ${checkSymbols ? styles.active : ""}`} onClick={() => setCheckSymbols(!checkSymbols)} >
            {checkSymbols ? <img src="./assets/images/icon-check.svg" alt="checkimg" /> : null} 
            </div>
            <span>Include Symbols</span>
          </div>

        </section>

        <div className={styles["password-strength"]}>
          <h2>STRENGTH</h2>
          <div className={styles["strength-indicator"]}>
            <span>{strengthName}</span>
            <div className={styles["strength-icon-wrap"]}>
              <div className={`${styles["rectangle"]} ${rectangleClassName}`}></div>
              <div className={`${styles["rectangle"]} ${!isTooWeak ? rectangleClassName : ""}`}></div>
              <div className={`${styles["rectangle"]} ${!isTooWeak && !isWeak ? rectangleClassName : ""}`}></div>
              <div className={`${styles["rectangle"]} ${strong ? rectangleClassName : ""}`}></div>
            </div>
          </div>
        </div>

        <button className={styles.generate} onClick={handleClick}>
          generate
          <img
            src="./assets/images/icon-arrow-right.svg"
            alt="buttonIconRight"
          />
        </button>

      </div>

    </ div>
  );
};

export default App;
