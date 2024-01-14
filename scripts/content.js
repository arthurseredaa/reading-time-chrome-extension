const init = () => {
  const article = document.querySelector('article');

  if (!article) return;

  const text = article.innerText;
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);

  // Create badge
  const badge = document.createElement('p');
  // Use the same styling as the publish information in an article's header
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector('h1');
  // Support for article docs with date
  const date = article.querySelector('time')?.parentNode;

  (date ?? heading).insertAdjacentElement('afterend', badge);
};

init();
