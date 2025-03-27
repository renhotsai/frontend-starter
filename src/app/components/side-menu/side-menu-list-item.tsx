import Link from "next/link";
import { useSideMenu } from "@/app/context/side-menu-context";

type SideMenuListItemProps = {
	name: string,
	uri: string
}

const SideMenuListItem = ({name,uri}:SideMenuListItemProps) =>{

	const { toggleSideMenu  } = useSideMenu();

	return (
		<li className={"flex justify-center p-5"}>
			<Link href={uri} onClick={toggleSideMenu}>{name}</Link>
		</li>
	)
}
export default SideMenuListItem