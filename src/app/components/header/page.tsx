"use client"
import HomeButton from "@/app/components/home-button";
import Link from "next/link";
import HamburgerMenu from "@/app/components/header/hamburger-menu";
import { useSession } from "next-auth/react";

const Header = () => {

	const { data:session } = useSession();

	return (
		<header className="bg-gray-800 h-1/12 flex justify-between items-center p-5">
			<div className="flex items-center justify-center gap-5">
				<HamburgerMenu/>
				<HomeButton />
			</div>
			{!session &&
			<Link href="/signIn">Login</Link>}
		</header>
	)
}

export default Header;