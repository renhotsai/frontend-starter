import { signOutAction } from "@/app/actions/auth";
import { useSession } from "next-auth/react";

const SignOutButton = () => {
	const {data: session} = useSession();
	if (session) {
		return <form
			action={() => signOutAction()}
		className={"flex p-5 justify-center"}>
			<button type="submit" >Sign Out</button>
		</form>
	}
	return null
}

export default SignOutButton