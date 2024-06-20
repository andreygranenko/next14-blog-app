import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
import {connectToDb} from "@/components/lib/utils";
import {User} from "@/components/lib/models";
export const {
  handlers: {GET, POST},
  signIn,
  signOut,
  auth
} = NextAuth({
  providers: [Github({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  })],
  callbacks: {
    async signIn({user, account, profile}) {
      // console.log(user, account, profile);
      if (account.provider === 'github') {
        console.log('connecting')
        try {
          await connectToDb();
          const user = await User.findOne({email: profile.email});
          if (!user) {
            const newUser = new User({
              email: profile.email,
              username: profile.login,
              img: profile.avatar_url,
              isAdmin: false
            });
            await newUser.save();
          }

        } catch (e) {
          console.log('not chill')
          console.log(e);
          return false
        }
      }
      return true
    }
  }
})