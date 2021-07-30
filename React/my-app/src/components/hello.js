function Hello(props) {
  return (
    <p
      style={{
        color: "green",
        fontSize: "34px",
        border: "5px solid black",
        textAlign: "center",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      Hello {props.name}
    </p>
  );
}

export default Hello;
