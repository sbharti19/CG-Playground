import React from 'react'
import { BiBarChartAlt2, BiHash} from "react-icons/bi"
import { BsThreeDots } from "react-icons/bs"
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { FaCode, FaRegEye } from 'react-icons/fa'
import Link from 'next/link'
import SidebarLink from './SidebarLink';
// import { signOut, useSession } from 'next-auth/react'

const Sidebar = () => {

    // const {data: session} = useSession()

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
                <SidebarLink redirectTo="#" text="Leaderboard" Icon={BiBarChartAlt2} />
            </div>


        </div>
    )
}

export default Sidebar