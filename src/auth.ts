import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google";

export const {handlers, auth, signIn, signOut} = NextAuth({
	providers: [GitHub, Google],
	// pages: {
	// 	signIn: '/signin',
	// },
	callbacks: {
		authorized: async ({auth}) => {
			return !!auth
		},
		redirect:({ url, baseUrl})=>{
			return baseUrl
		}
	},
})