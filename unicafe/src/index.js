import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.state}>{props.text}</button>;
};

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}:</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ values }) => {
  if (values.total === 0) {
    return (
      <div>
        <div>
          <h1>Statistics</h1>
        </div>
        <p>No Feedback Given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="Good" value={values.good} />
          <Statistic text="Neutral" value={values.neutral} />
          <Statistic text="Bad" value={values.bad} />
          <Statistic text="All" value={values.total} />
          <Statistic text="Average" value={values.avg} />
          <Statistic text="Positive" value={values.positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodUniCafe = () => {
    setGood(good + 1);
  };

  const neutralUniCafe = () => {
    setNeutral(neutral + 1);
  };

  const badUniCafe = () => {
    setBad(bad + 1);
  };

  const total = bad + neutral + good;
  const avg = (good - bad) / total;
  const positive = (good * 100) / total;

  const values = {
    good,
    neutral,
    bad,
    total,
    avg,
    positive,
  };

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
      </div>
      <Button state={goodUniCafe} text="Good" />
      <Button state={neutralUniCafe} text="Neutral" />
      <Button state={badUniCafe} text="Bad" />
      <div>
        <Statistics values={values} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
