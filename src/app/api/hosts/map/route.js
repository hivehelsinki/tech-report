import { token } from '@/lib/token';

export async function GET() {
  try {
    const clusters = await fetch(
      `https://api.intra.42.fr/v2/clusters?filter[campus_id]=${process.env.CAMPUS_ID}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token.access_token,
          'Content-Type': 'application/json',
        },
      }
    ).json();
    console.log(clusters);
    return Response.json({ clusters });
  } catch (error) {
    console.log(error);
    return new Response('', { status: 500 });
  }
}
