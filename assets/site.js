// Work page filters
document.querySelectorAll('.kc-filter').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var f = btn.getAttribute('data-filter');
    document.querySelectorAll('.kc-filter').forEach(function (b) {
      var on = b === btn;
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    document.querySelectorAll('.kc-work').forEach(function (w) {
      w.style.display = (f === 'All' || w.getAttribute('data-tag') === f) ? '' : 'none';
    });
  });
});
// Contact form (prototype: shows a confirmation, sends nothing)
var form = document.getElementById('kc-form');
var sent = document.getElementById('kc-sent');
if (form && sent) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.hidden = true; form.style.display = 'none';
    sent.hidden = false;
  });
  var reset = document.getElementById('kc-reset');
  if (reset) reset.addEventListener('click', function () {
    form.reset(); form.hidden = false; form.style.display = 'flex';
    sent.hidden = true;
  });
}
