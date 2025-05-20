function debounce(fn, delay) {
  let timer;
  function debounced(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }
  debounced.cancel = () => timer && clearTimeout(timer);
  return debounced;
}
export default debounce; 