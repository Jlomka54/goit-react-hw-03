import { useEffect, useState } from "react";
import Options from "./components/Options/Options";
import FeedBack from "./components/FeedBack/FeedBack";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";

const App = () => {
  const [response, setResponse] = useState(() => {
    const valFeedBack = localStorage.getItem("feedBack");
    const parsedValFeedBack = JSON.parse(valFeedBack) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    return parsedValFeedBack;
  });

  useEffect(() => {
    const stringifiedFeedBack = JSON.stringify(response);
    localStorage.setItem("feedBack", stringifiedFeedBack);
  }, [response]);

  const updateFeedback = (feedbackType) => {
    setResponse({ ...response, [feedbackType]: response[feedbackType] + 1 });
  };

  const resetFeedBack = () => {
    setResponse({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = response.good + response.neutral + response.bad;
  const positiveFeedBack = Math.round((response.good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedBack={resetFeedBack}
      />
      {totalFeedback > 0 ? (
        <FeedBack
          totalFeedback={totalFeedback}
          positiveFeedBack={positiveFeedBack}
          response={response}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
