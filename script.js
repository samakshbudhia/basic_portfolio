if (localStorage.getItem('theme') === 'dark' || 
       (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark-theme');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    if (rootElement.classList.contains('dark-theme')) {
      themeToggleBtn.textContent = '🌓';
    }

    themeToggleBtn.addEventListener('click', () => {
      rootElement.classList.toggle('dark-theme');
      const isDark = rootElement.classList.contains('dark-theme');
      themeToggleBtn.textContent = isDark ? '🌓' : '🌓';
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });