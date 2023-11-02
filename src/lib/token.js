async function fetchToken() {
  const response = await fetch(`https://api.intra.42.fr/oauth/token`, {
    method: 'POST',
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.FT_UID,
      client_secret: process.env.FT_SECRET,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export { fetchToken };
