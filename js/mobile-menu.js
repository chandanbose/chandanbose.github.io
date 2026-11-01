/* Site menu helpers (BioFSILab):
   - on phones, collapses the menu behind a "Menu" button
   - marks the menu item for the current page
   The menu stays fully visible if this script does not run. */
(function () {
  'use strict';
  var ul = document.querySelector('.nav_ul');
  if (!ul) return;

  // Highlight the current page
  var here = (location.pathname.split('/').pop() || 'home.html').toLowerCase();
  Array.prototype.forEach.call(ul.children, function (li) {
    var links = li.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var h = (links[i].getAttribute('href') || '').split('#')[0].split('?')[0].toLowerCase();
      if (h && h === here) { li.classList.add('is-current'); links[i].setAttribute('aria-current', 'page'); break; }
    }
  });

  // Phone menu toggle
  if (!ul.id) ul.id = 'site-menu';
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-controls', ul.id);
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span class="nav-toggle-icon" aria-hidden="true">&#9776;</span><span class="nav-toggle-text">Menu</span>';
  ul.parentNode.insertBefore(btn, ul);
  ul.classList.add('nav-collapsible');

  function setOpen(open) {
    ul.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.querySelector('.nav-toggle-icon').innerHTML = open ? '&#10005;' : '&#9776;';
    btn.querySelector('.nav-toggle-text').textContent = open ? 'Close' : 'Menu';
  }
  btn.addEventListener('click', function () { setOpen(!ul.classList.contains('is-open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && ul.classList.contains('is-open')) { setOpen(false); btn.focus(); } });
}());
