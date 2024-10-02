import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CollapsibleLink = ({href,title}) => {
  return (
    <Link
    href={href}
    className="flex items-center justify-between px-3  hover:bg-slate-900 transition-all duration-300 py-2 rounded-md"
  >
    <span className="text-sm">{title}</span>
    <PlusCircle className="w-4 h-4" />
  </Link>
  )
}

export default CollapsibleLink
