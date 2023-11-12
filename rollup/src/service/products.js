const API = 'https://api.escuelajs.co/api/v1';

export const getProducts = async ({ offset, limit } = {}) => {
  const URL = `${API}/products${(offset !== undefined) ? `?offset=${offset}&limit=${limit}` : ''}`;
  try {
    const res = await fetch(URL);

    if (!res.ok) throw Error('Algo salió mal :(');

    const data = await res.json();
    return data;
  } catch (error) {
    throw Error(error.message);
  }
};
