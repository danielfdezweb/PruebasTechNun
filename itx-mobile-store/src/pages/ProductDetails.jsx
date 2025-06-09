import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductDetails, addToCart } from '../services/api';
import useCache from '../services/useCache';

function ProductDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [colorCode, setColorCode] = useState();
  const [storageCode, setStorageCode] = useState();
  const cache = useCache(`product-${id}`);

  useEffect(() => {
    async function fetchDetails() {
      const data = await cache(() => getProductDetails(id));
      setDetails(data);
      setColorCode(data.options.colors[0].code);
      setStorageCode(data.options.storages[0].code);
    }
    fetchDetails();
  }, [id]);

  if (!details) return <div>Loading...</div>;

  const handleAdd = async () => {
    const res = await addToCart({ id, colorCode, storageCode });
    localStorage.setItem('cartCount', res.count);
  };

  return (
    <div className="details">
      <img src={details.imgUrl} alt={details.model} />
      <div>
        <h2>{details.brand} {details.model}</h2>
        <p>CPU: {details.cpu}</p>
        <p>RAM: {details.ram}</p>
        <p>OS: {details.os}</p>
        <select onChange={e => setColorCode(e.target.value)} value={colorCode}>
          {details.options.colors.map(c => <option key={c.code} value={c.code}>{c.name}</option>)}
        </select>
        <select onChange={e => setStorageCode(e.target.value)} value={storageCode}>
          {details.options.storages.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
        </select>
        <button onClick={handleAdd}>Añadir</button>
      </div>
    </div>
  );
}

export default ProductDetails;