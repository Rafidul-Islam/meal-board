export const fetchApi = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

// Note : this doesnt return any data directly but with a promise. async functions only return a promise.
