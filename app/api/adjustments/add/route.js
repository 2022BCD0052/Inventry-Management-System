import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      referenceNumber,
      addStockQty,
      receivingWarehouseId,
      notes,
      itemId,
    } = await request.json();

    const adjustment = await db.addStockAdjustment.create({
      data: {
        referenceNumber,
        addStockQty: parseInt(addStockQty),
        receivingWarehouseId,
        notes,
        itemId,
      },
    });
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
