import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <th>
        <h3>
          {props.name} {props.value} {props.textBefore}
        </h3>
      </th>
    </tr>
  );
};

const Statistics = (props) => {
  let good = props.statisticsObject.good;
  let neutral = props.statisticsObject.neutral;
  let bad = props.statisticsObject.bad;
  let total = good + neutral + bad;
  let average = total !== 0 ? (good - bad) / total : 0;
  let positive = total !== 0 ? (good / total) * 100 : 0;

  return (
    <>
      <h1>statistics</h1>
      {total === 0 ? (
        <h3>No feedback given</h3>
      ) : (
        <table>
          <tbody>
            <StatisticLine name="good" value={good} />
            <StatisticLine name="neutral" value={neutral} />
            <StatisticLine name="bad" value={bad} />
            <StatisticLine name="all" value={total} />
            <StatisticLine name="average" value={average} />
            <StatisticLine name="positive" value={positive} textBefore="%" />
          </tbody>
        </table>
      )}
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addCounter = (name) => {
    if (name == "good") setGood(good + 1);
    else if (name == "neutral") setNeutral(neutral + 1);
    else if (name == "bad") setBad(bad + 1);
  };

  return (
    <>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => addCounter("good")}>good</button>
        <button onClick={() => addCounter("neutral")}>neutral</button>
        <button onClick={() => addCounter("bad")}>bad</button>
      </div>
      <div>
        <Statistics statisticsObject={{ good, neutral, bad }} />
      </div>
    </>
  );
};

export default App;
