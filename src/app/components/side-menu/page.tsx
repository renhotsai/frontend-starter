"use client"
import SignOutButton from "@/app/components/side-menu/signout-button";
import { useSideMenu } from "@/app/context/side-menu-context";
import SideMenuList from "@/app/components/side-menu/side-menu-list";

const SideMenu = () => {
	const {sideMenu} = useSideMenu()
	if (sideMenu) {
		return <div className={"bg-gray-800 w-full sm:w-64 z-20 flex flex-col" }>
			<SideMenuList/>
			<SignOutButton/>
		</div>
	}
	return null
}
export default SideMenu;