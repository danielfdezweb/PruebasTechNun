export default function useCache(key) {
  return async (fetchFn) => {
    const cached = localStorage.getItem(key);
    if (cached) {
      const { timestamp, data } = JSON.parse(cached);
      if (Date.now() - timestamp < 3600000) return data; // 1h
    }
    const fresh = await fetchFn();
    localStorage.setItem(key, JSON.stringify({ timestamp: Date.now(), data: fresh }));
    return fresh;
  };
}