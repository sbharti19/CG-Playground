import Sidebar from "@/components/Sidebar/Sidebar";
import useHasMounted from "@/hooks/useHasMounted";


export default function Home() {
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;

	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Sidebar />
			</main>
		</>
	);
}