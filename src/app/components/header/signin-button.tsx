import { signIn } from "@/auth"


const SignInButton = () => {
	return (
		<form
			action={async () => {
				"use server"
				await signIn("github", { redirectTo: "/" })
			}}
		>
			<button type="submit">Sign in</button>
		</form>
	)
}
export default SignInButton