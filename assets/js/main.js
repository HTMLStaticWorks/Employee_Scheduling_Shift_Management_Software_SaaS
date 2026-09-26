document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if(mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Scroll to Top
  const scrollBtn = document.getElementById('scrollTopBtn');
  if(scrollBtn) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 300) scrollBtn.classList.add('visible');
      else scrollBtn.classList.remove('visible');
    });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Theme Toggle (Dark Mode)
  const themeToggles = document.querySelectorAll('.theme-toggle');
  
  // Check local storage for theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelectorAll('.moon-icon').forEach(icon => icon.style.display = 'none');
    document.querySelectorAll('.sun-icon').forEach(icon => icon.style.display = 'block');
  }

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        document.querySelectorAll('.moon-icon').forEach(icon => icon.style.display = 'block');
        document.querySelectorAll('.sun-icon').forEach(icon => icon.style.display = 'none');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelectorAll('.moon-icon').forEach(icon => icon.style.display = 'none');
        document.querySelectorAll('.sun-icon').forEach(icon => icon.style.display = 'block');
      }
    });
  });

  // RTL Toggle
  const rtlToggles = document.querySelectorAll('.rtl-toggle');
  
  // Check local storage for RTL
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