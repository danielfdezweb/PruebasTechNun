import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getProducts } from '../services/api';
import useCache from '../services/useCache';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const cache = useCache('products');

  useEffect(() => {
    async function fetchData() {
      const data = await cache(getProducts);
      setProducts(data);
    }
    fetchData();
  }, []);

  const filtered = products.filter(p =>
    (p.brand + p.model).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid">
        {filtered.map(p => (
          <Link key={p.id} to={`/product/${p.id}`} className="card">
            <img src={p.imgUrl} alt={p.model} />
            <div>{p.brand} {p.model} - {p.price || '€'}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;