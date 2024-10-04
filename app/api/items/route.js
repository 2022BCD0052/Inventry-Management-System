import { NextResponse } from "next/server";

export async function POST(request) {
  try {

    // { title, description, categoryId, sku, barcode, qty, unitId,brandId,supplierId,reOrderPoint,warehouseId,imageUrl,weight,dimensions,taxRate,notes,buyingPrice,sellingPrice
    const data = await request.json();
  
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Error creating items",
      },
      {
        status: 500,
      }
    );
  }
}
