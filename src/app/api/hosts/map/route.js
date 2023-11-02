import { fetchToken } from '@/lib/token';

export async function GET() {
  const token = await fetchToken();
  try {
    const response = await fetch(
      `https://api.intra.42.fr/v2/clusters?filter[campus_id]=${process.env.CAMPUS_ID}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token.access_token,
          'Content-Type': 'application/json',
        },
      }
    );
    const clusters = await response.json();
    return Response.json({ clusters });
  } catch (error) {
    console.log(error);
    return new Response('', { status: 500 });
  }
}
