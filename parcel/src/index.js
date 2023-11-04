const $app = document.getElementById('app');
const BASE_URL = 'https://api.escuelajs.co/api/v1';

const getProducts = async ({ offset, limit } = {}) => {
  const URL = `${BASE_URL}/products${(offset !== undefined) ? `?offset=${offset}&limit=${limit}` : ''}`;
  try {
    const res = await fetch(URL);

    if (!res.ok) throw Error('Algo salió mal :(');

    const data = await res.json();
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};

const renderProducts = (data = []) => {
  const products = data?.map(product => (/* html */`
    <article class="Card">
      <img loading="lazy" src="${product?.images[0]}" alt="${product?.title}"/>
      <h2>${product.title}</h2>
    </article>
  `)).join('');

  return products;
};

async function main () {
  const data = await getProducts({ offset: 0, limit: 10 });

  const products = document.createRange()
    .createContextualFragment(renderProducts(data));

  const productsContainer = document.createElement('section');
  productsContainer.classList.add('Items');
  productsContainer.append(products);

  $app.append(productsContainer);
}
main();
