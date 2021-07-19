window.onload = function () {
  /* Click the button to get the square root of each element in the array */
  const numbers = [4, 9, 16, 25];
  const squareRoot = document.getElementById('square-root');
  const squareRootResult = document.getElementById('square-root-result');

  squareRoot.onclick = function () {
    squareRootResult.innerHTML = numbers.map(Math.sqrt).join(', ');
    squareRoot.disabled = true;
    squareRoot.classList.add('light-title');
  };
};
