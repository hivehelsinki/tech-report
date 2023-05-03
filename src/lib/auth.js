import NextAuth from 'next-auth';
import FortyTwoProvider from 'next-auth/providers/42-school';

export const authOptions = {
  secret: process.env.SECRET,
  providers: [
    FortyTwoProvider({
      clientId: process.env.FT_UID,
      clientSecret: process.env.FT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile, user }) {
      if (!profile || !user) return false;

      const campusId = profile.campus_users.find(
        (cu) => cu.is_primary
      )?.campus_id;

      if (campusId.toString() !== process.env.CAMPUS_ID) return false;

      return user;
    },
    async jwt({ token, profile }) {
      if (profile) {
        token.user_id = profile.id;
        token.login = profile.login;
        token.image_url = profile.image.link;
        token.admin = profile['staff?'];
      }
      return token;
    },
    async session({ session, token }) {
      delete session.user;
      session.login = token.login;
      session.user_id = token.user_id;
      session.image_url = token.image_url;
      session.admin = token.admin;

      return session;
    },
    callbacks: {
      async redirect({ url, baseUrl }) {
        // Allows relative callback URL
        if (url.startsWith('/')) return `${baseUrl}${url}`;
        // Allows callback URLs on the same origin
        else if (new URL(url).origin === baseUrl) return url;
        return baseUrl;
      },
    },
  },
  pages: {
    signIn: '/login',
    error: '/error',
  },
};

export default NextAuth(authOptions);
