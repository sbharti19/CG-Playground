import LeaderboardTable from "@/components/LeaderboardTable/LeaderboardTable";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Sidebar from "@/components/Sidebar/Sidebar";
import useHasMounted from "@/hooks/useHasMounted";
import Link from "next/link";

import { useState } from "react";

export default function Problems() {
	const [loadingProblems, setLeaderboardData] = useState(true);
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;

	return (
		<>
			<div className='bg-dark-layer-2 min-h-screen'>
            <Sidebar />
				<div className=' overflow-x-auto mx-auto px-6 pb-10'>
				<h2 className="text-white text-center text-3xl p-2">LeaderBoard</h2>										
					<table className='text-sm xl:text-left text-gray-500 dark:text-gray-400 sm:w-[51%] xl:w-[60%] max-w-[1200px] mx-auto mr-[10rem]'>						
							<thead className='text-s text-amber-500 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
                                        Position
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
                                        Solved Problems
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Name
									</th>
								</tr>
							</thead>
						<LeaderboardTable setLeaderboardData={setLeaderboardData}/>
					</table>
				</div>
				<Link href="/Announcements">
					<img src="/announcement-gif.gif" alt="Announcements" className="max-w-[5%] fixed right-20 bottom-10"/>
				</Link>
			</div>
		</>
	);
}

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};