import Link from "next/link";
import { useSideMenu } from "@/app/context/side-menu-context";

type SideMenuListItemProps = {
	name: string,
	uri: string
}

const SideMenuListItem = ({name, uri}: SideMenuListItemProps) => {

	const {toggleSideMenu} = useSideMenu();

	return (
		<li>
			<Link href={uri} onClick={toggleSideMenu}
			      className={"flex justify-center p-5 w-full group hover:bg-gray-600 cursor-default"}>
				  <span className={"group-hover:border-b"}>{name}</span>
			</Link>
		</li>
	)
}
export default SideMenuListItem