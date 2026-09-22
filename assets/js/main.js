const navigationLinks = [...document.querySelectorAll('.nav-links a')];
const sections = navigationLinks.map(link => document.querySelector(link.hash));

function updateNavigation() {
  const offset = document.querySelector('.site-header').offsetHeight + 40;
  let activeSection = null;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) activeSection = section.id;
  }
  for (const link of navigationLinks) {
    if (link.hash === `#${activeSection}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    updateNavigation();
    scheduled = false;
  });
}, { passive: true });
window.addEventListener('resize', updateNavigation);
window.addEventListener('pageshow', updateNavigation);
updateNavigation();

const galleryVideos = [...document.querySelectorAll('.simulation-video, .real-world-video')];

for (const video of galleryVideos) {
  video.addEventListener('play', () => {
    for (const other of galleryVideos) {
      if (other !== video) other.pause();
    }
  });
}

if ('IntersectionObserver' in window) {
  const visibilityObserver = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) entry.target.pause();
    }
  });
  for (const video of galleryVideos) visibilityObserver.observe(video);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    for (const video of galleryVideos) video.pause();
  }
});
