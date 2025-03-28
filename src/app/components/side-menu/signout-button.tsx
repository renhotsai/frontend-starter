import { signOutAction } from "@/app/actions/auth";
import { useSession } from "next-auth/react";

const SignOutButton = () => {
	const {data: session} = useSession();
	if (session) {
		return <form action={() => signOutAction()}>
			<button type="submit" className={"flex p-5 justify-center w-full group  hover:bg-gray-600"} >
				<span className="group-hover:border-b">Sign Out</span>
			</button>
		</form>
	}
	return null
}

export default SignOutButton