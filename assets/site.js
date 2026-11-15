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
// Portfolio: a slot with data-youtube="<link or id>" becomes a privacy-friendly YouTube player
document.querySelectorAll('.kc-yt[data-youtube]').forEach(function (el) {
  var v = (el.getAttribute('data-youtube') || '').trim();
  if (!v) return;
  var m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{6,})/);
  var id = m ? m[1] : v;
  el.innerHTML = '';
  el.style.border = '0';
  var f = document.createElement('iframe');
  f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?rel=0';
  f.title = 'KlipScen video';
  f.loading = 'lazy';
  f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  f.allowFullscreen = true;
  f.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0';
  el.appendChild(f);
});
