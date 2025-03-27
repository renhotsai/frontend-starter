import "./globals.css";
import Header from "@/components/header";
import SideMenuContextProvider from "@/context/side-menu-context";
import SideMenu from "@/components/side-menu";
import { SessionProvider } from "next-auth/react";

export default function RootLayout ({
	                                    children,
                                    }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
		<body className="h-screen">
		<SessionProvider>
		<SideMenuContextProvider>
			<Header/>
			<div className={"flex h-11/12"}>
				<SideMenu/>
				<div className={"absolute sm:static"}>
					{children}
				</div>
			</div>
		</SideMenuContextProvider>
		</SessionProvider>
		</body>
		</html>
	);
}
