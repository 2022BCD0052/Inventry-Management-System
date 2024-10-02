import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SalesAcctivityCard = ({item }) => {
  return (
    <Link href={item.href} className="rounded-lg border cursor-pointer border-slate-200 hover:border-blue-400 bg-white px-3 py-4 flex flex-col gap-3 items-center transition-all duration-300 shadow">
    <h4 className={`font-semibold text-4xl ${item.color}`}>{item.number}</h4>
    <small className="text-slate-500">{item.unit}</small>
    <div className="flex items-center space-x-2">
      <CheckCircle2 className="w-4 h-4" />
      <span className="uppercase text-slate-500">{item.title}</span>
    </div>
  </Link>
  )
}

export default SalesAcctivityCard