import { signOutAction } from "@/app/actions/auth";

const SignOutButton = () => {
	return <form
		action={() => signOutAction()}
	>
		<button type="submit">Sign Out</button>
	</form>
}

export default SignOutButton