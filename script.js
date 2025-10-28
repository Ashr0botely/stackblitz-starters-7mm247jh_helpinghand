function displayResult(inputId, resultId, label) {
  const value = document.getElementById(inputId).value;
  document.getElementById(resultId).textContent = `${label}  ${value}.`;
}
