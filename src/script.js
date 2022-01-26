function add(x) {
  const exp = ['/', '+', '-', '*', '.'];
  const current = document.getElementById('history').innerText;

  if (exp.includes(x) && exp.find(e => current.endsWith(e))) return;
  
  document.getElementById('history').innerText += x;
  const result = eval(document.getElementById('history').innerText);
  if (result) document.getElementById('output').innerText = result;
}

function clean() {
  document.getElementById('history').innerText = '';
  document.getElementById('output').innerText = '';
}

function igual() {
  document.getElementById('history').innerText = document.getElementById('output').innerText;
  document.getElementById('output').innerText = '';
}

function deleteLast() {
  document.getElementById('history').innerText = document.getElementById('history').innerText.slice(0, -1);
  const result = eval(document.getElementById('history').innerText);
  if (result) document.getElementById('output').innerText = result;
}