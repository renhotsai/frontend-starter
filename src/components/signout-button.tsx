import { signOutAction } from "@/actions/auth";

const SignOutButton = () => {
	return <form
		action={() => signOutAction()}
	>
		<button type="submit">Sign Out</button>
	</form>
}

export default SignOutButton