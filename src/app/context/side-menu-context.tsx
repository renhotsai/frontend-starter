"use client"
import { createContext, useContext, useState } from "react";
import Page from "@/app/components/header/page";
import SideMenu from "@/app/components/side-menu/page";

type SideMenuContextProviderProps = {
	children: React.ReactNode;
}

type SideMenuContextType = {
	sideMenu: boolean,
	toggleSideMenu: () => void,
}

const SideMenuContext = createContext<SideMenuContextType | null>(null)
const SideMenuContextProvider = ({
	                                 children
                                 }: SideMenuContextProviderProps) => {
	const [sideMenu, setSideMenu] = useState(false);

	const toggleSideMenu = () => setSideMenu(!sideMenu);

	return (
		<SideMenuContext.Provider value={{sideMenu, toggleSideMenu}}>
			{children}
		</SideMenuContext.Provider>
	)
}
export default SideMenuContextProvider

export function useSideMenu () {
	const context = useContext(SideMenuContext)
	if (context === null) {
		throw new Error("useSideMenu must be used within a SideMenuContextProvider")
	}
	return context;
}