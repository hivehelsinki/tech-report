import { getServerSession } from 'next-auth/next';

import { authOptions } from '../pages/api/auth/[...nextauth]';

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session;
}
