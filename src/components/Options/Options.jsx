import css from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedBack, totalFeedback }) => {
  return (
    <div className={css.section}>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("good");
        }}
        type="button"
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("neutral");
        }}
        type="button"
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("bad");
        }}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={resetFeedBack} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
