window.setTimeout(function () {
  alert('HAMMERTIME');
}, 5000);

function hammerTime(time) {
  window.setTimeout(callback, 5000);

  function callback() {
    alert(`${time} is HAMMERTIME!`);
  }
};
