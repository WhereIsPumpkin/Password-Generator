import styles from "./app.module.scss";

const App = () => {
  

  return (
    <div className={styles["mainBody"]}>
      
      <h1 className={styles["generator"]}>Password Generator</h1>

      <div className={styles["generator-head"]}>
        <span className={styles["password-generated"]}>PTx1f5DaFX</span>
        <img src="./assets/images/icon-copy.svg" alt="copyIcon" />
      </div>

      <div className={styles["generator-main"]}>

        <div className={styles["character-length"]}>

          <div className={styles["character-length-wrap"]}>
            <h3>Character Length</h3>
            <span className={styles["length-number"]}>10</span>
          </div>

          <div className={styles["input-slider-wrap"]}>
            <input className={styles["inputSlider"]} type="range" min="1" max="20" value="10" step="1"></input>
            <div className={styles["sliderPercent"]}></div>
          </div>

        </div>

        <section className={styles["password-settings"]}>

          <div className={styles["setting"]} id={styles["upperCase"]}>
            <div className={styles["checkbox"]}>
              <img src="./assets/images/icon-check.svg" alt="checkimg" />
            </div>
            <span>Include Uppercase Letters</span>
          </div>

          <div className={styles["setting"]} id={styles["lowerCase"]}>
          <div className={styles["checkbox"]}>
              <img src="./assets/images/icon-check.svg" alt="checkimg" />
            </div>
            <span>Include Lowercase Letters</span>
          </div>

          <div className={styles["setting"]} id={styles["includeNumbers"]}>
          <div className={styles["checkbox"]}>
              <img src="./assets/images/icon-check.svg" alt="checkimg" />
            </div>
            <span>Include Numbers</span>
          </div>

          <div className={styles["setting"]} id={styles["includeSymbols"]}>
          <div className={styles["checkbox"]}>
              <img src="./assets/images/icon-check.svg" alt="checkimg" />
            </div>
            <span>Include Symbols</span>
          </div>

        </section>

        <div className={styles["password-strength"]}>
          <h2>STRENGTH</h2>
          <div className={styles["strength-indicator"]}>
            <span>MEDIUM</span>
            <div className={styles["strength-icon-wrap"]}>
              <div className={styles["rectangle"]}></div>
              <div className={styles["rectangle"]}></div>
              <div className={styles["rectangle"]}></div>
              <div className={styles["rectangle"]}></div>
            </div>
          </div>
        </div>

        <button className={styles.generate}>
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
