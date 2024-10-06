import css from "./FeedBack.module.css";

const FeedBack = ({ response, positiveFeedBack, totalFeedback }) => {
  return (
    <ul className={css.section}>
      <lip>Good: {response.good}</lip>
      <li> Neutral: {response.neutral} </li>
      <li>Bad: {response.bad} </li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveFeedBack}%</li>
    </ul>
  );
};

export default FeedBack;
