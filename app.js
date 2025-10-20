var counter = document.getElementById('counter');
var incrementButton = document.getElementById('increment');
var decrementButton = document.getElementById('decrement');
var resetButton = document.getElementById('reset');

var count = 0;
counter.innerText = count;

incrementButton.addEventListener('click', () => {
  count++;
  counter.innerText = count;
});

decrementButton.addEventListener('click', () => {
  count--;
  counter.innerText = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  counter.innerText = count;
})