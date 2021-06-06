import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return <button onClick={props.state}>{props.text}</button>;
};

const Statistics = (props) => {
  if ((props.bad, props.good, props.neutral, props.total === 0)) {
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
          <tr>
            <td>Good:</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>All:</td>
            <td>{props.total}</td>
          </tr>
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

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
      </div>
      <Button state={goodUniCafe} text="Good" />
      <Button state={neutralUniCafe} text="Neutral" />
      <Button state={badUniCafe} text="Bad" />
      <div>
        <Statistics bad={bad} good={good} neutral={neutral} total={total} />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
