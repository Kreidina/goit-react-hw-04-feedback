import { useState } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const option = e.target.textContent;

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = (good / total) * 100;
    return positivePercentage.toFixed(0);
  };

  const total = good + neutral + bad;
  const options = { good, neutral, bad };
  const btn = Object.keys(options);
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={btn} onLeaveFeedback={handleClick} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={Number(positiveFeedback)}
        />
      </Section>
    </div>
  );
};
