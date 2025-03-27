"use client"
import { useSideMenu } from "@/app/context/side-menu-context";
import { PiList } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";


import React, {} from 'react'

const HamburgerMenu = () => {
	const {sideMenu, toggleSideMenu} = useSideMenu()
	return (
		<button onClick={toggleSideMenu}>
			{
				sideMenu ?
					<RxCross2 size={30}/>
					:
					<PiList size={30}/>
			}
		</button>
	)
}
export default HamburgerMenu;