"use client"
import SignOutButton from "@/app/components/side-menu/signout-button";
import { useSideMenu } from "@/app/context/side-menu-context";
import { useSession } from "next-auth/react";
import SideMenuList from "@/app/components/side-menu/side-menu-list";

const SideMenu = () => {
	const {sideMenu} = useSideMenu()

	const { data:session } = useSession();

	if (sideMenu) {
		return <div className={"bg-gray-800 w-full sm:w-64 z-20" }>
			<SideMenuList/>
			{session &&
                <SignOutButton/>
			}
		</div>
	}
	return null
}
export default SideMenu;