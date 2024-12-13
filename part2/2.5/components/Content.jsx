const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const TotalValue = (props) => {
  const total = props.parts.reduce((s, p) => s + p.exercises, 0);
  return <h4>Total of exercises {total}</h4>;
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <Part part={part} key={part.id} />
      ))}
      <TotalValue parts={props.parts} />
    </>
  );
};

export default Content;
