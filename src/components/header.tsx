import Home from "@/components/home";
import Link from "next/link";
import HamburgerMenu from "@/components/hamburger-menu";

const Header = async () => {
	console.log(`Header`)
	return (
		<header className="bg-gray-800 h-1/12 flex justify-between items-center p-5">
			<div className="flex items-center justify-center gap-5">
				<HamburgerMenu/>
				<Home/>
			</div>
			<Link href="/signin">Login</Link>
		</header>
	)
}

export default Header;