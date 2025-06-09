const BASE = 'https://itx-frontend-test.onrender.com/api';

export async function getProducts() {
  const res = await fetch(`${BASE}/product`);
  return res.json();
}

export async function getProductDetails(id) {
  const res = await fetch(`${BASE}/product/${id}`);
  return res.json();
}

export async function addToCart({ id, colorCode, storageCode }) {
  const res = await fetch(`${BASE}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, colorCode, storageCode })
  });
  return res.json();
}