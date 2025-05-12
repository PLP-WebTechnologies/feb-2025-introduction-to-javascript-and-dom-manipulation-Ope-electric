function changeText() {
  const text = document.getElementById('dynamic-text');
  text.textContent = '✨ The text has been changed!';
  text.style.color = 'purple';
  text.style.fontWeight = 'bold';
  text.style.fontSize = '20px';
}

function addElement() {
  const container = document.getElementById('element-container');
  const newDiv = document.createElement('div');
  newDiv.textContent = '🆕 New Element Added!';
  newDiv.classList.add('new-element');
  container.appendChild(newDiv);
}

function removeElement() {
  const container = document.getElementById('element-container');
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}
