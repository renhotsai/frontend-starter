"use client"
import HomeButton from "@/app/components/header/home-button";
import Link from "next/link";
import HamburgerMenuButton from "@/app/components/header/hamburger-menu-button";
import { useSession } from "next-auth/react";

const Header = () => {

	const { data:session } = useSession();

	return (
		<header className="bg-gray-800 h-1/12 flex justify-between items-center p-5">
			<div className="flex sm:items-center sm:justify-center sm:gap-5 sm:flex-row sm:w-auto flex-row-reverse justify-between w-full">
				<HamburgerMenuButton/>
				<HomeButton />
			</div>
			{!session &&
			<Link href="/signIn">Login</Link>}
		</header>
	)
}

export default Header;