const input = document.querySelector('input[type=file]');

input.addEventListener('change', (ev) => {
  const file = ev.target.files[0];
  console.table(file);
})
