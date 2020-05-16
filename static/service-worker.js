if ('serviceWorker' in navigator) {
  navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then(() => {
          console.info('Gift Egwuenu Registered');
      }, err => console.error("Gift Egwuenu Service Worker registration failed: ", err));
  navigator.serviceWorker
      .ready
      .then(() => {
          console.info('Gift Egwuenu Service Worker Ready');
      });
}