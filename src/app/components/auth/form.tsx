export function Form({
	                     action,
	                     children,
                     }: {
	action: any;
	children: React.ReactNode;
}) {
	return (
		<form
			action={action}
			className="flex flex-col space-y-4 px-4 py-8 sm:px-16"
		>
			<div>
				<label
					htmlFor="email"
					className="block text-sm font-medium text-gray-300 uppercase"
				>
					Email Address
				</label>
				<input
					id="email"
					name="email"
					type="email"
					placeholder="user@acme.com"
					autoComplete="email"
					required
					className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-gray-500"
				/>
			</div>
			<div>
				<label
					htmlFor="password"
					className="block text-sm font-medium text-gray-300 uppercase"
				>
					Password
				</label>
				<input
					id="password"
					name="password"
					type="password"
					required
					placeholder="user@acme.com"
					className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-gray-500"
				/>
			</div>
			{children}
		</form>
	);
}