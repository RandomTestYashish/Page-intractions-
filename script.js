/* ==========================================================================
   Airtel Thanks home — interaction layer
   1. scroll-driven header compaction   2. category tabs
   3. drag-scroll carousels             4. view all / sheet / toast
   ========================================================================== */
(function () {
  'use strict';

  var header = document.getElementById('appHeader');
  var catNav = document.getElementById('catNav');
  var underline = document.getElementById('catUnderline');

  /* ------------------------------------------------- 1. header compaction */
  var COMPACT_AT = 84;          // px of scroll that maps to the fully compact nav
  var lastP = -1;
  var ticking = false;

  function applyScroll() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset || 0;
    var p = y / COMPACT_AT;
    if (p < 0) p = 0;
    if (p > 1) p = 1;
    // ease-out so the first pixels of scroll do most of the shrinking
    var eased = 1 - Math.pow(1 - p, 2);
    if (Math.abs(eased - lastP) > 0.004) {
      lastP = eased;
      header.style.setProperty('--p', eased.toFixed(3));
      placeUnderline();
    }
    header.classList.toggle('is-stuck', y > 4);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(applyScroll);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ------------------------------------------------------ 2. category tabs */
  function placeUnderline() {
    var active = catNav.querySelector('.cat.is-active');
    if (!active) return;
    var label = active.querySelector('.cat-label');
    var navBox = catNav.getBoundingClientRect();
    var box = label.getBoundingClientRect();
    var w = box.width + 12;
    underline.style.width = w + 'px';
    underline.style.left = (box.left - navBox.left + (box.width - w) / 2) + 'px';
  }

  catNav.addEventListener('click', function (e) {
    var btn = e.target.closest('.cat');
    if (!btn) return;
    catNav.querySelectorAll('.cat').forEach(function (c) { c.classList.remove('is-active'); });
    btn.classList.add('is-active');
    placeUnderline();
    if (btn.dataset.cat !== 'All') toast(btn.dataset.cat + ' services');
  });

  window.addEventListener('resize', placeUnderline);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(placeUnderline);

  /* -------------------------------------------- 3. drag-scroll carousels */
  document.querySelectorAll('[data-drag]').forEach(function (rail) {
    var down = false, startX = 0, startLeft = 0, moved = 0;

    rail.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'touch') return;      // native touch scrolling wins
      down = true; moved = 0;
      startX = e.clientX;
      startLeft = rail.scrollLeft;
      rail.classList.add('is-dragging');
    });

    rail.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > moved) moved = Math.abs(dx);
      rail.scrollLeft = startLeft - dx;
      if (moved > 4) e.preventDefault();
    });

    function release() {
      if (!down) return;
      down = false;
      rail.classList.remove('is-dragging');
    }
    rail.addEventListener('pointerup', release);
    rail.addEventListener('pointercancel', release);
    rail.addEventListener('pointerleave', release);
    rail.addEventListener('click', function (e) {
      if (moved > 6) { e.preventDefault(); e.stopPropagation(); moved = 0; }
    }, true);
  });

  /* ------------------------------------------------------- 4a. "View All" */
  var EXTRA = [
    { label: 'Airtel Black', art: 'assets/il-tv.svg' },
    { label: 'Xstream Fiber', art: 'assets/il-wifi.svg' },
    { label: 'Buy Insurance', art: 'assets/il-bank.svg' },
    { label: 'Gold Loan', art: 'assets/il-fd.svg' },
    { label: 'IPTV', art: 'assets/il-dth.svg' },
    { label: 'Data Packs', art: 'assets/il-prepaid.svg' }
  ];
  var grid = document.getElementById('prodGrid');
  var viewAll = document.getElementById('viewAll');
  var expanded = false;

  viewAll.addEventListener('click', function () {
    expanded = !expanded;
    if (expanded) {
      EXTRA.forEach(function (item) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'prod tap is-extra is-new';
        b.innerHTML = '<span class="prod-label">' + item.label +
                      '</span><img src="' + item.art + '" alt="">';
        grid.appendChild(b);
      });
      viewAll.textContent = 'View Less';
    } else {
      grid.querySelectorAll('.is-extra').forEach(function (n) { n.remove(); });
      viewAll.textContent = 'View All';
      grid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  /* ------------------------------------------------- 4b. recharge sheet */
  var sheet = document.getElementById('sheet');
  var scrim = document.getElementById('scrim');

  function openSheet() {
    sheet.hidden = false; scrim.hidden = false;
    requestAnimationFrame(function () {
      sheet.classList.add('is-open');
      scrim.classList.add('is-open');
    });
  }
  function closeSheet() {
    sheet.classList.remove('is-open');
    scrim.classList.remove('is-open');
    setTimeout(function () { sheet.hidden = true; scrim.hidden = true; }, 300);
  }

  document.getElementById('rechargeNow').addEventListener('click', openSheet);
  document.getElementById('sheetClose').addEventListener('click', closeSheet);
  scrim.addEventListener('click', closeSheet);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !sheet.hidden) closeSheet();
  });

  document.getElementById('sheetOpts').addEventListener('click', function (e) {
    var opt = e.target.closest('.sheet-opt');
    if (!opt) return;
    this.querySelectorAll('.sheet-opt').forEach(function (o) { o.classList.remove('is-sel'); });
    opt.classList.add('is-sel');
  });

  document.getElementById('sheetPay').addEventListener('click', function () {
    var sel = sheet.querySelector('.sheet-opt.is-sel b');
    closeSheet();
    toast('Recharge of ' + (sel ? sel.textContent : '') + ' started');
  });

  /* ---------------------------------------------- 4c. balance eye toggle */
  var mask = document.getElementById('balMask');
  var balToggle = document.getElementById('balToggle');
  var shown = false;
  balToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    shown = !shown;
    mask.textContent = shown ? '₹4,820.50' : '₹••••••';
    balToggle.firstChild.nodeValue = shown ? 'Hide' : 'View';
  });

  /* ------------------------------------------------------ 4d. tap toasts */
  var toastEl = document.getElementById('toast');
  var toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('is-on'); }, 1700);
  }

  document.addEventListener('click', function (e) {
    var card = e.target.closest('.prod, .mini, .ex-card, .ben, .pk, .like, .svc-card, .mg, .promo-strip, .cur-card, .fresh');
    if (!card || sheet.contains(card)) return;
    var name = card.querySelector('.prod-label, .mini-label, .ex-title, .ben-title, .pk-name, h4, .svc-txt b, .mg-label, .promo-text, .fresh-title');
    toast((name ? name.textContent.replace(/\s+/g, ' ').trim() : 'Opening') + ' →');
  });

  /* ------------------------------------------------------------- startup */
  placeUnderline();
  applyScroll();
})();
