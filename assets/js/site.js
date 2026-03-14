(function () {
  var htmlEl = document.documentElement;
  var stored = localStorage.getItem('theme');
  if (stored) htmlEl.setAttribute('data-theme', stored);

  function toggleTheme() {
    var next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  ['theme-btn', 'theme-btn-sidebar'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener('click', toggleTheme);
  });

  document.querySelectorAll('.nav-tree a').forEach(function (link) {
    link.addEventListener('click', function () {
      var tog = document.getElementById('sidebar-toggle');
      if (tog) tog.checked = false;
    });
  });
})();
