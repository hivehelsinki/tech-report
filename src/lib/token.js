var globalToken = null;

export const token = globalToken ?? (await getToken());

async function getToken() {
  const tokenRequest = await fetch('https://api.intra.42.fr/oauth/token', {
    method: 'POST',
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: process.env.UID,
      client_secret: process.env.SECRET,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // if status is 200, return token, else, log error message
  if (tokenRequest.status === 200) {
    return await tokenRequest.json();
  } else {
    throw new Error('Failed to get token. Error code: ' + tokenRequest.status);
  }
}
