document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------
  // Mobile navigation
  // -------------------------------------------------------
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const originalNavActions = document.querySelector('.nav-actions');

  if (mobileBtn && navLinks) {
    // Put RTL, theme and Login inside the hamburger menu on tablet/mobile.
    if (originalNavActions && !navLinks.querySelector('.mobile-nav-actions')) {
      const mobileItem = document.createElement('li');
      mobileItem.className = 'mobile-nav-actions';

      const mobileRow = document.createElement('div');
      mobileRow.className = 'mobile-action-row';

      originalNavActions.querySelectorAll('.rtl-toggle, .theme-toggle').forEach(control => {
        const clone = control.cloneNode(true);
        clone.removeAttribute('id');
        mobileRow.appendChild(clone);
      });

      const login = originalNavActions.querySelector('a[href*="login"]');
      if (login) {
        const loginClone = login.cloneNode(true);
        loginClone.classList.add('mobile-login');
        mobileItem.appendChild(mobileRow);
        mobileItem.appendChild(loginClone);
      } else {
        mobileItem.appendChild(mobileRow);
      }

      navLinks.appendChild(mobileItem);
    }

    mobileBtn.setAttribute('aria-expanded', 'false');
    mobileBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('show');
      mobileBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('menu-open', open);
    });

    navLinks.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        mobileBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
      });
    });
  }

  // -------------------------------------------------------
  // Scroll to top
  // -------------------------------------------------------
  const scrollBtn = document.getElementById('scrollTopBtn');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) scrollBtn.classList.add('visible');
      else scrollBtn.classList.remove('visible');
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------
  // Theme toggle
  // -------------------------------------------------------
  const themeToggles = document.querySelectorAll('.theme-toggle');
  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    document.querySelectorAll('.moon-icon').forEach(icon => {
      icon.style.display = theme === 'dark' ? 'none' : 'block';
    });
    document.querySelectorAll('.sun-icon').forEach(icon => {
      icon.style.display = theme === 'dark' ? 'block' : 'none';
    });
  };

  const currentTheme = localStorage.getItem('theme') || 'light';
  applyTheme(currentTheme);

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const nextTheme =
        document.documentElement.getAttribute('data-theme') === 'dark'
          ? 'light'
          : 'dark';

      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
    });
  });

  // -------------------------------------------------------
  // RTL toggle
  // -------------------------------------------------------
  const rtlToggles = document.querySelectorAll('.rtl-toggle');
  const currentRtl = localStorage.getItem('rtl');

  if (currentRtl === 'true') {
    document.documentElement.setAttribute('dir', 'rtl');
  }

  rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

      if (isRTL) {
        document.documentElement.removeAttribute('dir');
        localStorage.setItem('rtl', 'false');
      } else {
        document.documentElement.setAttribute('dir', 'rtl');
        localStorage.setItem('rtl', 'true');
      }
    });
  });
});
