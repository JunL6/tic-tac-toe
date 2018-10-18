/* determine winner */
export default function(squares) {
  const winMatrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // get X's array
  const xArray = [];
  squares.map((value, index) => {
    if (value === "X") {
      xArray.push(index);
    }
    return 0;
  });
  // console.log("xArray: " + xArray);
  /* get O's array */
  const oArray = [];
  squares.map((value, index) => {
    if (value === "O") {
      oArray.push(index);
    }
    return 0;
  });
  // console.log("oArray: " + oArray);
  /* determine if X wins */
  const resultX = winMatrix.find(subArray => {
    return subArray.every(i => {
      return xArray.includes(i);
    });
  });
  if (resultX) {
    // alert("X win! " + resultX);
    return "X";
  }
  // determine if O wins
  const resultO = winMatrix.find(subArray => {
    return subArray.every(i => {
      return oArray.includes(i);
    });
  });
  if (resultO) {
    // alert("X win! " + resultX);
    return "O";
  }
  return null;
}
