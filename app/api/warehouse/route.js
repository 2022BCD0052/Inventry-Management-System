import { NextResponse } from "next/server";

 export async function POST(request){
   try {
    const {title, location,type, description} = await request.json()
    const Warehouse = {title,location,type ,description}
    console.log(Warehouse);
    return NextResponse.json(Warehouse)

   } catch (error) {
    console.log(error)
    return NextResponse.json({
        error,
        message: 'Error creating Warehouse'
    },{
        status: 500
    })
    
   }


 }