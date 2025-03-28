'use client'
import HomeButton from "@/app/components/header/home-button";
import HamburgerMenuButton from "@/app/components/header/hamburger-menu-button";
import LoginButton from "@/app/components/header/login-button";


const Header = () => {

	return (
		<header className="bg-gray-800 h-1/12 flex justify-between items-center p-5">
			<div className="flex sm:items-center sm:justify-center sm:gap-5 sm:flex-row sm:w-auto flex-row-reverse justify-between w-full">
				<HamburgerMenuButton/>
				<HomeButton />
			</div>
			<LoginButton/>
		</header>
	)
}

export default Header;