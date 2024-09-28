import LeaderboardTable from "@/components/LeaderboardTable/LeaderboardTable";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import Sidebar from "@/components/Sidebar/Sidebar";
import useHasMounted from "@/hooks/useHasMounted";

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
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto mr-[10rem]'>						
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
			</div>
		</>
	);
}

