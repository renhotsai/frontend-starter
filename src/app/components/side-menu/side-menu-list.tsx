import SideMenuListItem from "@/app/components/side-menu/side-menu-list-item";

const SideMenuList = () => {

	const menuList = [
		{name: "Home",url:"/"},
		{name: "Game",url:"/games"},
	]

	return (
		<ul>
			{menuList.map((item, index) => (
				<SideMenuListItem key={index} name={item.name} uri={item.url} />
			))}
		</ul>
	)
}

export default SideMenuList