// Triangle
function calculateTriangle() {
  const triangleBaseInput = document.getElementById("triangleBase");
  const base = parseFloat(triangleBaseInput.value);

  const triangleHeightInput = document.getElementById("triangleHeight");
  const height = parseFloat(triangleHeightInput.value);

  const area = 0.5 * base * height;
  document.getElementById("area").innerText = area;
}

// Rectangle
