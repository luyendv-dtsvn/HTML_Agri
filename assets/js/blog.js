
  
  (function () {
    function toggleDesktopSection() {
      const desktopSection = document.querySelector('.notification-slide > .line-h.mb-5');
      const isSmallScreen = window.innerWidth < 375;

      if (desktopSection) {
        if (isSmallScreen) {
          desktopSection.style.display = 'none';
        } else {
          desktopSection.style.display = '';
        }
      }
    }

    // Run on load
    toggleDesktopSection();

    // Add event listener for window resize
    window.addEventListener('resize', toggleDesktopSection);
  })();
