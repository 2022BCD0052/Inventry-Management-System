import OptionCard from '@/components/dashboard/OptionCard'
import FixedHeaders from '@/components/dashboard/FixedHeaders'
import { Component, ScrollText, Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'





const optionCards = [
  {
    title : "Item groups",
    description : "Create multiple variants of the same item using Item Groups",
    link : "/inventory/items",
    linkTitle : "New Item Group",
    enabled : true,
    icon: ScrollText
  },
  {
    title : "Composite Items",
    description : "Bundle different items together and sell them as kits",
    link : "/inventory/items",
    linkTitle : "New Composite Items",
    enabled : true,
    icon: Shirt
  },
  {
    title : "Items",
    description : "Create standalone items and services that you buy and sell",
    link : "/inventory/items",
    linkTitle : "New Item",
    enabled : true,
    icon: Component
  },
  {
    title : "Price Lists",
    description : "Tweak your item prices for specific contacts or transactions",
    link : "/inventory/items",
    linkTitle : "New Price Lists",
    enabled : true,
    icon: Shirt
  },
]

const Inventory = (optionData) => {
  const { title, description, link, linkTitle, enabled,icon } = optionData;


  return (
    <div className='bg-[#ececec] min-h-screen'>
      <FixedHeaders newLink="/inventory-dashboard/inventory/items/new"/>
      <div className='grid grid-cols-1 lg:grid-cols-2 m-4 px-16 py-8 gap-6  '>
       {
        optionCards.map((card ,i)=>{
          return(

                   <OptionCard optionData = {card} key={i}/>

          )
        })
       }
       
      </div>
    </div>
  )
}

export default Inventory
