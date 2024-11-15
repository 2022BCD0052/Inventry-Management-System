import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      referenceNumber,
      itemId,
      transferStockQty,
      givingWarehouseId,
      receivingWarehouseId,
      notes,
    } = await request.json();

    const adjustment = await db.transferStockAdjustment.create({
      data:{
        referenceNumber,
        itemId,
        transferStockQty: parseInt(transferStockQty),
        givingWarehouseId,
        receivingWarehouseId,
        notes,
      }
    })
    console.log(adjustment);
    return NextResponse.json(adjustment);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Error creating adjustments",
      },
      {
        status: 500,
      }
    );
  }
}
