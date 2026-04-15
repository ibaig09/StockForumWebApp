/**
 * ChartHive — app.js
 * Lightweight vanilla JS for UI interactions.
 * No framework dependencies.
 */

'use strict';

/* ─── Vote buttons ─── */
document.querySelectorAll('.ch-vote-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const container = btn.closest('.ch-post-vote, .tvote');
    if (!container) return;
    const countEl = container.querySelector('.ch-vote-count, .tvote-num');
    const upBtn   = container.querySelectorAll('.ch-vote-btn')[0];
    const isUp    = btn === upBtn;
    const current = parseInt(countEl.textContent.replace(',', ''), 10) || 0;

    if (btn.dataset.voted === '1') {
      btn.dataset.voted = '0';
      btn.style.color   = '';
      countEl.textContent = (current + (isUp ? -1 : 1)).toLocaleString('en-IN');
    } else {
      // Clear sibling vote
      container.querySelectorAll('.ch-vote-btn').forEach(b => { b.dataset.voted = '0'; b.style.color = ''; });
      btn.dataset.voted = '1';
      btn.style.color   = isUp ? 'var(--ch-indigo)' : 'var(--ch-bear)';
      countEl.textContent = (current + (isUp ? 1 : -1)).toLocaleString('en-IN');
    }
  });
});

/* ─── Filter pills (feed) ─── */
document.querySelectorAll('.filter-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(p => {
      p.classList.remove('active');
      p.classList.add('inactive');
    });
    pill.classList.add('active');
    pill.classList.remove('inactive');
  });
});

/* ─── Tab switching ─── */
document.querySelectorAll('.ch-tabs').forEach(tabGroup => {
  tabGroup.querySelectorAll('.ch-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabGroup.querySelectorAll('.ch-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});

/* ─── Profile tabs ─── */
document.querySelectorAll('.ptab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

/* ─── Sidebar active state ─── */
document.querySelectorAll('.ch-sidebar-item').forEach(item => {
  if (!item.classList.contains('active')) {
    item.addEventListener('click', () => {
      document.querySelectorAll('.ch-sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  }
});

/* ─── Post compose: submit ─── */
document.querySelectorAll('.compose textarea, .ch-textarea').forEach(ta => {
  ta.addEventListener('keydown', e => {
    // Ctrl/Cmd + Enter to submit
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      const btn = ta.closest('.compose, .compose-footer')?.querySelector('button');
      if (btn) btn.click();
    }
  });
});

/* ─── Ticker live color update ─── */
function updateTickers() {
  // In production this would pull from a WebSocket / API
  // Here we simulate minor price movement for demo purposes
  document.querySelectorAll('.ch-ticker').forEach(tick => {
    const isUp = tick.style.color === 'rgb(74, 222, 128)'; // ch-bull
    const rand = (Math.random() * 0.05).toFixed(2);
    // We don't mutate text in this static demo, just ensure color is stable
    tick.style.opacity = '1';
  });
}

/* ─── OTP input auto-advance ─── */
document.querySelectorAll('.ch-otp-box').forEach((box, i, arr) => {
  box.addEventListener('input', () => {
    box.value = box.value.replace(/\D/g, '').slice(0, 1);
    if (box.value && arr[i + 1]) arr[i + 1].focus();
  });
  box.addEventListener('keydown', e => {
    if (e.key === 'Backspace' && !box.value && arr[i - 1]) arr[i - 1].focus();
  });
  box.addEventListener('paste', e => {
    e.preventDefault();
    const paste = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
    [...arr].forEach((b, idx) => { if (paste[idx]) b.value = paste[idx]; });
    const last = Math.min(paste.length, arr.length) - 1;
    if (arr[last]) arr[last].focus();
  });
});

/* ─── Keyboard shortcut hint ─── */
document.addEventListener('keydown', e => {
  // "/" focuses search
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    const search = document.querySelector('.ch-search input');
    if (search) search.focus();
  }
});

/* ─── Init ─── */
console.log('%cChartHive UI loaded ✓', 'color:#4ade80;font-weight:600');
