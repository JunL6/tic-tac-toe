function Square(props) {
  return (
    <button
      className={"square squareID-" + props.squareId}
      // onClick={this.props.onClick}
    >
      {props.value}
    </button>
  );
}
