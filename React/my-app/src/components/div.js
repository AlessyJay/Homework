function Div(props) {
  const mainStyle = {
    width: "80%",
    margin: "auto",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    flex: "auto",
    border: "5px solid black",
  };
  const subStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1% 1% 1% 1%",
  };
  return (
    <div>
      <div className="info" style={mainStyle}>
        <h1>{props.title}</h1>
        <div style={subStyle}>
          <p id="author">Author: {props.author}</p>
          <p id="date">Date: {props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default Div;
