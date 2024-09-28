import React from 'react'
import { BiBarChartAlt2, BiHash } from "react-icons/bi"
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { FaChevronLeft, FaChevronRight, FaCode, FaRegEye } from 'react-icons/fa'
import Link from 'next/link'
import { auth } from "@/firebase/firebase";
import SidebarLink from './SidebarLink';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authModalAtom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { Problem } from '@/utils/types/problem';
import { problems } from '@/utils/problems';
import { BsList } from 'react-icons/bs';
import Timer from '../Timer/Timer';
import Logout from '../Buttons/Logout';

type SidebarProps = {
	problemPage?: boolean;
};

const Sidebar: React.FC<SidebarProps> = ({ problemPage }) => {

	const [user] = useAuthState(auth);
	const setAuthModalState = useSetRecoilState(authModalState);
	const router = useRouter();

	const handleProblemChange = (isForward: boolean) => {
		const { order } = problems[router.query.pid as string] as Problem;
		const direction = isForward ? 1 : -1;
		const nextProblemOrder = order + direction;
		const nextProblemKey = Object.keys(problems).find((key) => problems[key].order === nextProblemOrder);

		if (isForward && !nextProblemKey) {
			const firstProblemKey = Object.keys(problems).find((key) => problems[key].order === 1);
			router.push(`/problems/${firstProblemKey}`);
		} else if (!isForward && !nextProblemKey) {
			const lastProblemKey = Object.keys(problems).find(
				(key) => problems[key].order === Object.keys(problems).length
			);
			router.push(`/problems/${lastProblemKey}`);
		} else {
			router.push(`/problems/${nextProblemKey}`);
		}
	};

	return (
		<div className='hidden sm:flex flex-col items-start xl:items-start bg-dark-layer-1 xl:w-[240px] p-2 fixed h-full border-r border-gray-400  xl:pr-8'>
			<div className='flex w-48 mb-8 h-auto cursor-pointer hoverEffect'>

				<Link href="/"><img src="/a.png" alt="CG Playground" /></Link>
			</div>
			<div className='space-y-3 mt-4 mb-2.5 text-lg' >
				<div className="cursor-pointer"></div>
				<SidebarLink redirectTo="/" text="Rapid Reads" Icon={MdOutlineMarkChatUnread} />
				<SidebarLink redirectTo="Problems" text="Solve" Icon={BiHash} />
				<SidebarLink redirectTo="Quiz" text="Quiz-a-thon" Icon={FaCode} />
				<SidebarLink redirectTo="GrowthTracker" text="Growth Tracker" Icon={FaRegEye} />
				<SidebarLink redirectTo="Leaderboard" text="Leaderboard" Icon={BiBarChartAlt2} />
			</div>

			<div
				className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverEffect m-auto mb-2 px-4 py-2"
			>
				{problemPage && (
					<div className='flex items-center gap-4 flex-1 justify-center'>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							onClick={() => handleProblemChange(false)}
						>
							<FaChevronLeft />
						</div>
						<Link
							href='/'
							className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
						>
							<div>
								<BsList />
							</div>
							<p>Problem List</p>
						</Link>
						<div
							className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
							onClick={() => handleProblemChange(true)}
						>
							<FaChevronRight />
						</div>
					</div>
				)}

				<div className='flex items-center space-x-4 flex-1 justify-end'>
					<div>
					</div>
					{!user && (
						<Link
							href='/auth'
							onClick={() => setAuthModalState((prev) => ({ ...prev, isOpen: true, type: "login" }))}
						>
							<button className='bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-2 border-transparent
                transition duration-300 ease-in-out '>Sign In</button>
						</Link>
					)}
					{user && problemPage && <Timer />}
					{user && (
						<div className='cursor-pointer group relative'>
							<img src='/avatar.png' alt='Avatar' width={30} height={30} className='rounded-full' />
							<div
								className='absolute bottom-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
							>
								<p className='text-sm'>{user.email}</p>
							</div>
						</div>
					)}
					{user && <Logout />}
				</div>
			</div>

		</div>
	)
}

export default Sidebar