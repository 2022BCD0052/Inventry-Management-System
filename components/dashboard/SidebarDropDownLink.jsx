import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"; 
import { BaggageClaim, ChevronRight } from 'lucide-react';
import CollapsibleLink from './CollapsibleLink';



const SidebarDropDownLink = ({title,items, icon:Icon}) => {
    // const Icon = icon
  return (
    <Collapsible>
                <CollapsibleTrigger className="flex items-center  justify-between  w-full">
                
                 <div className='p-2 flex items-center space-x-2'>
                  <Icon className="w-4 h-4 text-gray-500" />
                  <span>{title}</span>
                 </div>
                 <ChevronRight className='w-4 h-4'/>
                </CollapsibleTrigger>

                <CollapsibleContent className="flex-col items-center justify-between">
                  {items.map((item, index) => {
                    return (
                      <div className=" pl-6">
                        <CollapsibleLink href={item.href} title={item.title} />
                      </div>
                    );
                  })}
                </CollapsibleContent>
              </Collapsible>

  )
}

export default SidebarDropDownLink
