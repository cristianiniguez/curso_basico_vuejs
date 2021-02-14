const API_URL = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${API_URL}/assets?limit=20`)
    .then(res => res.json())
    .then(res =>
      res.data.map(el => ({
        ...el,
        img: `https://static.coincap.io/assets/icons/${el.symbol.toLowerCase()}@2x.png`
      }))
    );
}

export default { getAssets };
