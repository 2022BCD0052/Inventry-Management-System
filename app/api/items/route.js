import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // { title, description, categoryId, sku, barcode, qty, unitId,brandId,supplierId,reOrderPoint,warehouseId,imageUrl,weight,dimensions,taxRate,notes,buyingPrice,sellingPrice
    const itemData = await request.json();
    const item = db.item.create({
      data: {
        title:itemData.title,
        description:itemData.description,
        categoryId:itemData.categoryId,
        sku:itemData.sku,
        barcode:itemData.barcode,
        qty:parseInt(itemData.qty),
        unitId:itemData.unitId,
        brandId:itemData.brandId,
        supplierId:itemData.supplierId,
        reOrderPoint:parseInt(itemData.reOrderPoint),
        warehouseId:itemData.warehouseId,
        imageUrl:itemData.imageUrl,
        weight:parseFloat(itemData.weight),
        dimensions:itemData.dimensions,
        taxRate:parseFloat(itemData.taxRate),
        notes:itemData.notes,
        buyingPrice:parseFloat(itemData.buyingPrice),
        sellingPrice:parseFloat(itemData.sellingPrice),
      },
    });
    console.log(data);
    return NextResponse.json(item);
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

export async function GET(request) {
  try {
    const items = await db.items.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log(categories);
    return NextResponse.json(items);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
        message: "Error fetching items",
      },
      {
        status: 500,
      }
    );
  }
}
