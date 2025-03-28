import Link from 'next/link';
import { SubmitButton } from '@/app/components/auth/submit-button';
import { signIn } from '@/auth';
import { Form } from "@/app/components/auth/form";
import Separator from "@/app/components/auth/Separator";
import OauthSignIn from "@/app/components/auth/OAuthSignIn";
import SignInButton from "@/app/components/auth/signin-button";

const Login = () => {
	return (
		<div className="flex h-full w-screen items-center justify-center bg-gray-900">
			<div className="z-10 w-full max-w-md overflow-hidden rounded-2xl bg-gray-800">
				<div
					className="flex flex-col items-center justify-center space-y-3 border-b border-gray-900 px-4 py-6 pt-8 text-center sm:px-16">
					<h3 className="text-center text-2xl font-bold text-white">Sign In</h3>
					<p className="text-center text-gray-400">
						Use your email and password to sign in
					</p>
				</div>
				<Form
					action={async (formData: FormData) => {
						'use server';
						await signIn('credentials', {
							redirectTo: '/protected',
							email: formData.get('email') as string,
							password: formData.get('password') as string,
						});
					}}
				>
					<SubmitButton>Sign in</SubmitButton>
					<Separator text={'or'}/>
					<p className="text-center text-sm text-gray-500">
						{"Don't have an account? "}
						<Link href="/register" className="font-semibold text-gray-200">
							Sign up
						</Link>
						{' for free.'}
					</p>
				</Form>
			</div>
		</div>
	)
		;
}

export default Login;