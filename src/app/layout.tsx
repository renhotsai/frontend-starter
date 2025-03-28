import "./globals.css";

import SideMenuContextProvider from "@/app/context/side-menu-context";
import SideMenu from "@/app/components/side-menu/page";
import { SessionProvider } from "next-auth/react";
import Header from "@/app/components/header/page";

export default function RootLayout ({
	                                    children,
                                    }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className="h-screen w-screen overflow">
		<SessionProvider>
		<SideMenuContextProvider>
			<Header />
			<div className={"flex h-11/12 w-full"}>
				<SideMenu/>
				<div className={"sm:static z-0"}>
					{children}
				</div>
			</div>
		</SideMenuContextProvider>
		</SessionProvider>
		</body>
		</html>
	);
}
