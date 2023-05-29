import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {

                const { email, password } = credentials;

                const res = await
                    axios.post('http://localhost:3001/api/user/login', {
                        email,
                        password
                    })
                if (res) {
                    const user = res.data.user;
                    const token = res.data.accessToken;
                    return user;
                }
                else {
                    console.log("ERROR");
                    return null;
                }
            }
        })

    ],
    pages: {
        signIn: '/login'
    },
    secret: process.env.NEXTAUTH_SECRET
});