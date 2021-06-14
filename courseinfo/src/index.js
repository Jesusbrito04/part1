import React from "react";
import ReactDOM from "react-dom";

const Header = ({ namee }) => <div>Courses: {namee}</div>;

const Content = ({ parts, exercises }) => (
  <div>
    <p>
      {parts} {exercises}
    </p>
  </div>
);

const Total = ({ sum }) => <div>Total: {sum}</div>;

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const namee = course.name;

  const part = course.parts.map((agar) => (
    <div>
      <p>
        {agar.name} {agar.exercises}
      </p>
    </div>
  ));

  const sum = course.parts
    .map((task) => task.exercises)
    .reduce((a, b) => a + b);

  return (
    <div>
      <Header namee={namee} />
      <Content parts={part} />
      <Total sum={sum} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
