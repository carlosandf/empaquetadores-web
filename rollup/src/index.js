import logo from './assets/logo.png';
import { getProducts } from './service/products.js';
import './styles/index.css';

const $ = (query) => document.querySelector(query);

const $body = $('body');

const renderProducts = (data = []) => {
  const products = data?.map(product => (/* html */`
    <article class="Card">
      <img loading="lazy" src="${product?.images[0]}" alt="${product?.title}"/>
      <div class="Card_info">
        <span class="Card_price">$${product?.price}</span>
        <span class="Card_title">${product?.title}</span>
      </div>
    </article>
  `)).join('');

  return products;
};

const Header = () => {
  return document.createRange()
    .createContextualFragment(/* html */`
      <header>
        <a href="/">
          <img class="header-logo" src=${logo} alt="Logo de la marca" />
        </a>
      </header>`
    );
};

const Footer = () => {
  return document.createRange()
    .createContextualFragment(/* html */`
      <footer>
        <p><strong>&copy; 2023</strong> - CF Shops</p>
      </footer>`
    );
};

const main = async () => {
  const data = await getProducts({ offset: 5, limit: 15 });
  const products = document.createRange()
    .createContextualFragment(renderProducts(data));

  const productsContainer = document.createElement('section');
  productsContainer.classList.add('Items');
  productsContainer.append(products);

  // Agregar el header y footer a nuestro body
  $body.prepend(Header());
  $body.append(productsContainer);
  $body.append(Footer());
};
main();
