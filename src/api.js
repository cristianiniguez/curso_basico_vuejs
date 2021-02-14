const API_URL = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${API_URL}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data);
}

export default { getAssets };
