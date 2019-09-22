window.onload = function() {
  /* Click the button to get the square root of each element in the array. */
  const numbers = [4, 9, 16, 25];
  console.log(numbers);

  document.getElementById("button1").onclick = function() {
    document.getElementById("squareRoot").innerHTML = numbers
      .map(Math.sqrt)
      .join(", ");
  };
};
