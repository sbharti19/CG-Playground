import Link from 'next/link';
import React from 'react'

interface SidebarLinkProps {
  Icon: React.ComponentType;
  text: string;
  redirectTo:string;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ Icon, text, redirectTo }) => {
  return (
    <Link href = {redirectTo} className='font-normal text-base flex items-center text-amber-500 justify-center hover:text-white xl:justify-start text-xl space-x-3 hoverEffect px-4 py-2 w-fit'>
        <Icon />
        <div className="hidden text-base cursor-pointer xl:inline">
					{text}
				</div>
    </Link>
  )
}

export default SidebarLink