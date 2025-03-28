import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import Image from "next/image";

const LoginButton = () => {

	const {data: session} = useSession();
	console.log(`session: ${JSON.stringify(session)}`);
	return (
		<div className="overflow-auto border rounded-4xl ml-5">
			{!session &&
                <Link href="/login">Login</Link>}
			{session && session.user?.image &&
                <Image src={session.user.image} alt={`${session.user.name}`} width={40} height={40}/>
			}
			{session && !session.user?.image &&
                <IoPersonOutline/>
			}
		</div>
	)
}
export default LoginButton;