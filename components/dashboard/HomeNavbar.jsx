import { Building2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'



const navLink = [
    {
        title:'dashboard',
        href : '/inventory-dashboard/home/overview'
    },
    {
        title:'Getting Started',
        href : '/inventory-dashboard/home/getting-started'
    },
    {
        title:'Recent Updates',
        href : '/inventory-dashboard/home/updates'
    },
    {
        title:'Announcements',
        href : '/inventory-dashboard/home/announcement'
    },
]
const HomeNavbar = () => {
  return (
    <div className='h-32 p-5 bg-green-700'>
        <div className='flex ml-3 '>
            <div className='flex w-12 h-12 items-center justify-center rounded-lg border border-slate-400 bg-white'>
                <Building2/>
            </div>
            <div className='flex ml-1 flex-col'>
                <p className='capitalize text-slate-700 font-semibold'> hellow, yogesh kumar</p>
                <span className='text-gray-800'>Gujrat</span>
            </div>

        </div>
        <nav className=' sticky space-x-3 mt-6 '>
            {
                navLink.map((item , i)=>{
                    return (
                        <Link key={i} href={`${item.href}`} className=' py-3 border-blue-600 border-b-2 '>
                            {item.title}
                        </Link>
                       
                    )
                })
            }
        </nav>
        
    </div>
  )
}

export default HomeNavbar