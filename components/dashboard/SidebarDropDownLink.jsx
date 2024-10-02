import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"; 
import { BaggageClaim } from 'lucide-react';
import CollapsibleLink from './CollapsibleLink';



const SidebarDropDownLink = ({title,items, icon:Icon}) => {
    // const Icon = icon
  return (
    <Collapsible>
                <CollapsibleTrigger className="flex items-center space-x-2  mb-2">
                  <Icon className="w-7 h-7"/>
                  <span>{title}</span>
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
