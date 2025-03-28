import { signIn } from "@/auth"
import { FaGithub } from "react-icons/fa";


const SignInButton = () => {
	return (
		<form
			action={async () => {
				"use server"
				await signIn("github", { redirectTo: "/" })
			}}
		>
			<button type="submit"><FaGithub/></button>
		</form>
	)
}
export default SignInButton