"use client"
import SignOutButton from "@/components/signout-button";
import { useSideMenu } from "@/context/side-menu-context";
import Link from "next/link";
import { useSession } from "next-auth/react";

const SideMenuContext = () => {
	const {sideMenu} = useSideMenu()
	const menuList = [
		{name: "Home",url:"/"},
		{name: "Game",url:"/games"},
	]

	const { data:session } = useSession();

	if (sideMenu) {
		return <div className={"bg-gray-800 w-full sm:w-64"}>
			<ul className="">
				{menuList.map((item, index) => (
					<li key={index} className="">
						<Link href={item.url}>{item.name}</Link>
					</li>
				))}
			</ul>
			{session &&
                <SignOutButton/>
			}
		</div>
	}
	return null
}
export default SideMenuContext;