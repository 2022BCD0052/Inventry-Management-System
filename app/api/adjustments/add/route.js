import { NextResponse } from "next/server";

 export async function POST(request){
   try {
    const {transferStockQty,receivingBranchId,Notes} = await request.json()
    const brand = {transferStockQty,receivingBranchId,Notes}
    console.log(brand);
    return NextResponse.json(brand)

   } catch (error) {
    console.log(error)
    return NextResponse.json({
        error,
        message: 'Error creating adjustments'
    },{
        status: 500
    })
    
   }
 }