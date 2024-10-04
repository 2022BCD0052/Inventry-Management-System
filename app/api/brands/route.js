import { NextResponse } from "next/server";

 export async function POST(request){
   try {
    const {title} = await request.json()
    const brand = {title}
    console.log(brand);
    return NextResponse.json(brand)

   } catch (error) {
    console.log(error)
    return NextResponse.json({
        error,
        message: 'Error creating brand'
    },{
        status: 500
    })
    
   }
 }