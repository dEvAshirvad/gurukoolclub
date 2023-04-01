import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client";
import { getToken } from "next-auth/jwt";


const prisma = new PrismaClient()

export const authOptions = {
    session: {
        strategy: 'jwt'
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: profile.role ?? "Subscriber"
                }
            }
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            session.user = token.token.user
            return session
        },
        jwt: (token) => {
            return token
        }

    },
    pages: {
        signIn: '/',
    }
}

export default NextAuth(authOptions)