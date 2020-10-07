import React from "react";

const Course = ({ course }) => {
  return (
    <div>
      <Header title='Web Dev Curriculum' />
      <Content course={course} />
      {/* <Total parts={course.parts} /> */}
    </div>
  );
};

const Header = ({ title }) => <h2>{title}</h2>;

const Content = ({ course }) => {
  return course.map((p) => {
    return (
      <div key={p.id}>
        <h3>{p.name}</h3>
        {getCourse(p)}
        {getTotal(p)}
      </div>
    );
  });
};

const getCourse = (e) => (
  <ul>
    {e.parts.map((c) => (
      <li key={c.id}>
        {c.name} {c.exercises}
      </li>
    ))}
  </ul>
);

const getTotal = ({ parts }) => {
  let total = parts.reduce((sum, p) => sum + p.exercises, 0);

  return <h4>Total number of exercises: {total}</h4>;
};

export default Course;
