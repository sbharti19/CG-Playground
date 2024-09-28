import Sidebar from "@/components/Sidebar/Sidebar";
import useHasMounted from "@/hooks/useHasMounted";
import Link from "next/link";


export default function Home() {
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Sidebar />
				<div>
					<Link href="/📢Announcements">
						<img src="/announcement-gif.gif" alt="Announcements" className="max-w-[5%] fixed right-20 bottom-10"/>
					</Link>
				</div>
			</main>
		</>
	);
}