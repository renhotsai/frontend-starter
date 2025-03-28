import { FaGithub } from "react-icons/fa";
import { signIn } from "@/auth";

type OAuthProviders = {
	name: string;
	displayName: string;
	icon: JSX.Element;
};


const OauthSignIn = () => {
	const oAuthProviders: OAuthProviders = [
		{
			name: 'github',
			displayName: 'GitHub',
			icon: <FaGithub className="h-5 w-5"/>
		}
		/* Add desired OAuth providers here */
	];
	return (
		<div className={"flex"}>
			{
				oAuthProviders.map((provider) => (
					<div key={provider.name}>
						<form
							className="pb-2"
							action={async () => {
								"use server"
								await signIn("github", {redirectTo: "/"})
							}}
						>
							<button type="submit">
								Sign in
							</button>
						</form>
					</div>
				))
			}
		</div>
	)
}
export default OauthSignIn;