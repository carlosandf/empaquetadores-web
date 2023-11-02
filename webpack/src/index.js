import './styles/index.css';

const $ = (query) => document.querySelector(query);

export const linkTemplate = ({ color, label, emoji }) => {
  const variants = {
    blue: 'bg-blue-200 text-blue-600 hover:text-blue-800',
    green: 'bg-green-200 text-green-600 hover:text-green-800'
  };

  return (/* html */ `
    <a href="#" target="_blank" class="${variants[color]} px-4 py-5 w-full flex justify-between">
      <div class="text-sm font-bold text-center cursor-pointer">
        ${label}
      </div>
      <span>${emoji}</span>
    </a>
  `);
};

const linksContainer = $('#linksContainer');

const data = {
  links: [
    {
      label: 'Telegram',
      url: 'https://example.com/',
      color: 'blue',
      emoji: '📖'
    },
    {
      label: 'WhatsApp',
      url: 'https://example.com/',
      color: 'green',
      emoji: '💬'
    }
  ]
};

function main () {
  if (linksContainer) {
    data.links.forEach(link => {
      const article = document.createRange().createContextualFragment(linkTemplate(link));
      linksContainer.appendChild(article);
    });
  }
}
window.onload = main();
